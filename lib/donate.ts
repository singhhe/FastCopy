// FastCopy is free — no licence key, no trial, no locked features. There is no checkout
// to configure here; the only money path is an optional donation.

/**
 * PayPal no-code checkout link. Deliberately amount-free: the donor decides what (if
 * anything) FastCopy is worth to them, so nothing on the site quotes a price.
 */
export const PAYPAL_DONATE_URL = "https://www.paypal.com/ncp/payment/3WW9T4GNQZ6KC";

/**
 * Direct link to the release asset itself (not the releases page) - clicking Download starts
 * the file saving immediately with no GitHub UI in between. GitHub also counts downloads of
 * this exact asset automatically (see the release's own page for the count).
 *
 * When cutting a new version: update both this URL and the version number in the filename.
 * Built from installer/FastCopy.iss in the FastCopy-App repo (`ISCC.exe installer\FastCopy.iss`
 * after `dotnet publish -c Release -r win-x64 --self-contained true`).
 */
export const DOWNLOAD_URL =
  "https://github.com/singhhe/FastCopy-App/releases/download/v1.0.0/FastCopy-Setup-1.0.0.exe";
