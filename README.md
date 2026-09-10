# tailark1

Private archive of every block and illustration published in Tailark’s catalogues on 2026-09-10. Premium content was downloaded using the account owner’s Tailark API key. The key is not included.

## Included

| Collection | Unique blocks | Unique illustrations |
| --- | ---: | ---: |
| Quartz / Premium | 258 | 123 |
| Dusk / Free | 39 | 0 |
| Mist / Free | 54 | 0 |
| Veil / Free | 57 | 0 |
| **Total** | **408** | **123** |

Every block and illustration is included in **both Base UI and Radix UI versions**: 816 block versions and 246 illustration versions. The archive also contains 361 Tailark supporting registry items, 407 published block preview images, and 142 media files referenced by the source. Full pages and page-only source files are excluded.

## Browse the archive

- `CATALOG.csv` — searchable list of all blocks and illustrations, their categories, and file locations.
- `source/base/pro/` — original Premium Base UI source, including `blocks/`, `illustrations/`, and shared components.
- `source/radix/pro/` — original Premium Radix UI source.
- `source/base/oss/` and `source/radix/oss/` — Dusk, Mist, Veil, and their supporting source.
- `registry/{base,radix}/{pro,oss}/` — complete original registry JSON responses, including source contents, install targets, and dependencies.
- `previews/{quartz,dusk,mist,veil}/` — published block preview PNGs.
- `assets/` — downloaded copies of remotely referenced images. `catalogs/media.json` maps original URLs to these files.
- `MANIFEST.json` — complete item inventory, checksums for extracted sources, counts, and validation results.
- `SHA256SUMS` — checksums for every archived file other than the checksum list itself.

## Using the source

This is a source archive, not a preconfigured application. Tailark illustrations are React/TypeScript components; their editable source is included. Source files are preserved as provided, with original imports, install targets, dependency declarations, and remote media URLs. Downloaded media copies are included separately without rewriting source URLs.

Use the registry JSON for each item to identify its source files, install targets, npm dependencies, and supporting registry components. All Tailark registry dependencies are included. Third-party npm packages are listed in the original JSON; `@shadcn/accordion` is the one external registry dependency. Package installations are not bundled.

For project setup and theme variables, see [Tailark Quick Setup](https://tailark.com/docs/quick-setup) and [Tailark Theme](https://tailark.com/docs/theme). Use `base` or `radix` consistently with your project’s UI library.

## Verification and upstream media gaps

The 408 block names and 123 illustration names exactly match Tailark’s published website catalogue in both UI versions. All 1,423 requested registry items downloaded successfully, every returned source file was extracted, all extracted checksums were checked, and all Tailark registry dependencies resolve within this archive. No pages or API keys are included.

Two optional media URLs could not be downloaded from their upstream hosts:

- The published `how-it-works-3` thumbnail returns HTTP 404. The complete block source is included in both UI versions.
- The older `html.tailus.io/blocks/customers/nvidia.svg` reference fails TLS hostname verification. The referring block source is preserved, and the unavailable media URL is recorded in `catalogs/media.json`.

## Ownership

Tailark and the original asset authors retain their rights. Premium material remains subject to the account owner’s Tailark licence. This archive does not grant redistribution rights. The upstream Tailark Blocks MIT licence is preserved in `docs/TAILARK-OSS-LICENCE.md`; it does not relicense Premium content or independently sourced media.
