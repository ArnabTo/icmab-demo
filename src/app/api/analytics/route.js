import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const serviceAccountCredentials = {
  type: 'service_account',
  project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
  private_key_id: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: 'google-analytic-test@ascendant-talon-452904-t6.iam.gserviceaccount.com',
  client_id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/google-analytic-test%40ascendant-talon-452904-t6.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com',
};

const auth = new google.auth.GoogleAuth({
  // Instead of keyFile, use credentials
  credentials: serviceAccountCredentials,
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

const analytics = google.analyticsdata({
  version: 'v1beta',
  auth,
});

export async function GET() {
  try {
    const response = await analytics.properties.runReport({
      property: 'properties/481156122', // Replace with your GA4 Property ID
      requestBody: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'country' }, { name: 'city' }],
        metrics: [{ name: 'activeUsers' }],
      },
    });
    console.log(process.env.NEXT_PUBLIC_PROJECT_ID);
    console.log('Response data:', response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching analytics data:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
    return NextResponse.json(
      { error: 'Failed to fetch analytics data', details: error.message },
      { status: 500 }
    );
  }
}
