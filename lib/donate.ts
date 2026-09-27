// FastCopy is free — no licence key, no trial, no locked features. There is no checkout
// to configure here; the only money path is an optional donation.

/**
 * PayPal no-code checkout link. Deliberately amount-free: the donor decides what (if
 * anything) FastCopy is worth to them, so nothing on the site quotes a price.
 */
export const PAYPAL_DONATE_URL = "https://www.paypal.com/ncp/payment/3WW9T4GNQZ6KC";

/**
 * TODO: point this at the real installer. There is no published build yet, so every
 * "Download" button on the page currently leads to this placeholder. Swap in a GitHub
 * Releases asset (e.g. .../releases/latest) or a file you host and nothing else needs
 * to change — every download CTA reads this one constant.
 */
export const DOWNLOAD_URL = "https://github.com/your-username/fastcopy/releases/latest";
