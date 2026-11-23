# BentoPDF, with Hebrew support and an English-only build

This fork builds a personal Docker image of **[BentoPDF](https://github.com/alam00000/bentopdf)**,
the privacy-first PDF toolkit by **[Abdullah Alam (alam00000)](https://github.com/alam00000)**.
All credit for BentoPDF goes to its author and contributors; please star and support
[the original project](https://github.com/alam00000/bentopdf).

## What's different

Each new BentoPDF release is built unchanged, plus two patches from the
[`custom/hebrew-en`](../../tree/custom/hebrew-en) branch:

1. **Hebrew (RTL) text in saved PDFs.** Filled form fields, "Add text"
   annotations and Sign PDF (normal and flattened) keep Hebrew text when saved.
   Proposed upstream in [alam00000/bentopdf#984](https://github.com/alam00000/bentopdf/pull/984).
2. **Optional English-only build.** `DOCS_LANGUAGES` and `VITE_APP_LANGUAGES`
   build settings; this image uses English only, which makes it about half the size.

The image is built in simple mode.

## How it's built

[`.github/workflows/build.yml`](.github/workflows/build.yml) checks daily for a new
BentoPDF release, applies the patches, smoke-tests the result and publishes
`ghcr.io/shlomid83/bento-pdf:latest` and `:<version>` for amd64 and arm64.
If a patch no longer applies to a new release, the run fails and nothing is published.

## License

BentoPDF is licensed under the [GNU AGPL-3.0](https://github.com/alam00000/bentopdf/blob/main/LICENSE)
(a commercial license is also offered by its author). These patches are under the same license.
The source of this build is the upstream release plus the patches on
[`custom/hebrew-en`](../../tree/custom/hebrew-en).
