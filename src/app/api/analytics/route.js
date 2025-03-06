import { google } from "googleapis";
import { NextResponse } from "next/server";

// Create credentials object directly instead of loading from file
const credentials = {
  "web": {
    "client_id": "431847804616-t5sgr4l5jagngfljh7337hji1dlnhmaj.apps.googleusercontent.com",
    "project_id": "ascendant-talon-452904-t6",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "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",
    "redirect_uris": ["http://localhost:3032"],
    "javascript_origins": ["http://localhost:3032"]
  }
};

const serviceAccountCredentials = {
  "type": "service_account",
  "project_id": "ascendant-talon-452904-t6",
  "private_key_id": "8815378b0156f69c77b39fe4df51514b2dd4c996",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCynmFol8kvc7DR\nPAfPQLJbmOxrAEMVu9n+YT2NWK/QBdWPe4KUDooNccAZjPFus+4bKzi3rHtbZiBi\n9gHpeTWILjESWpHCijpC0gPNWGKNqaY+aWDx7HIJKwDYnqsfCi//aogZ3jDmORJZ\nnTEv2ptB8QpmtyA92Bq3An2xwWchC1DwX3J5fYAOIuD6jlOXB5nJI+NPWPo9M0RH\nN1PmLPjkbySUmvpxkUYDpHaLp4CsPmKKKkpMeTvaYRHvlm2h7+Pbm8TcOLnsJ85c\nbxIfREJs4znkKJrv0PYf/23jqQza/ELYu2IKsX6MFMFrT5h8uSI+gwUxjARb+yST\notSgu3cPAgMBAAECggEARh0olHN8jC1oG4HqeN7nBFCfgRMNwlLGa/XEwR6uiMQ5\nhASSCcc5RrS/mOf7/54OmciaD3NbytFoZiA2OO0U59tl9NPrgoda/k7NIkaPDReq\ng7Y+0UgkrVedkeqatmj71VF+klTnMf/2JYowPB4eMsDI+e/pbo1NU0hdibCm6E+O\ncFJSYDNU5+1Z/f2HtxGvTFHx1i9n1eTBVK5mqChZDe8UGHkOiCDPOmc9UpdSA4gs\nXKUStUmPfUkopsA1MpyRgeoJ7xEmoqpAuCnTMGP0cd18Z8P3mlnSGc0BfUtWD5Rb\ngEBhAvJ+fF6/HLpKDpqXGtaJV2iTtXjVWN695FZZyQKBgQDaR03su1r4vDeDPMQf\nKslBndQI8MLQyzwFjHOqsky8gqFHLFM2LV0FX9raRowzdBASs/4mMpj1mt6lbWQi\n+GYbJGRGSuLjMr1RxROkE6L3jJvHg6bDmzvzn3+m85DXTo/ifMr4d3AldBh8hXex\ny9t3BRnEBh4XJ5rXlV49w2x2iQKBgQDRfIOmpWyHna917esvoBciChy8rcGLRINB\npBK+r82no2+i8st2BKb5/TCImmHVtjicx/4aajq+PcqZxIH9z5GxrwveqmG1Y7jg\n58HvD5B3dFBmcqylyPy3g2szOBLNWF/Tvg3nun9xu/gdW1+IiyJnoFmf2JdgkEZ1\nkToCMUoa1wKBgFS782sfvAvs/NvMXhH/SQtY2nPyCp6FFrLMuCYeex1+1F7NvSu9\n5mtsr4emdUyQFKE+ED4BzFEjoqSzV3kf1ntY4DhNX9B05Pt2Ns6t9MiGY/7Kg5VR\nkK9dTm+gA60hSUfRy/UyYG2ZqNvF8BYsHfERINRwz4OLk1d3G5N8ZoGJAoGAE2it\n6eq5u3boosyAVdFHU2gMcY7Ht9eJMbO56ODw9O83kKleIHkd31uN+5oSJnLTm/ML\nn/bnqmifNM/4G0P4A7ZsKx0uIFg08OGIHlYa1HZ6XIOTa2jLwVTzwbMYSt49QqkB\nMM8er7LysgWdPFFnxqIcq6qtm8zCOnJSJZHbg9ECgYAfEib/Rwc8f9Br/j0rRg3d\neOnYMsYFxSFvZsnHYjwl/fpwrDv6LK70zMbfjME/RYyuKf+bc88VGgphh5dhLmEp\n1C7YWB3eU8R/II39QG/dNEyqvf5ev1PW2q7shBS3hIM1aTapUR3JDeMFB6R4PyLn\nKA3LJ876LVB/RAs8jwBkkw==\n-----END PRIVATE KEY-----\n",
  "client_email": "google-analytic-test@ascendant-talon-452904-t6.iam.gserviceaccount.com",
  "client_id": "105876823601984762311",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/google-analytic-test%40ascendant-talon-452904-t6.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

const auth = new google.auth.GoogleAuth({
  // Instead of keyFile, use credentials
  credentials: serviceAccountCredentials,
  scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
});

const analytics = google.analyticsdata({
  version: "v1beta",
  auth,
});

export async function GET() {
  try {
    const response = await analytics.properties.runReport({
      property: "properties/481156122", // Replace with your GA4 Property ID
      requestBody: {
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "country" }, { name: "city" }],
        metrics: [{ name: "activeUsers" }],
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching analytics data:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
    return NextResponse.json({ error: "Failed to fetch analytics data", details: error.message }, { status: 500 });
  }
}