# Test data: G3W Essentials 11: Style Your G3W

Give your G3W your own look: brand colours, a landing page image, your logos and favicon, and your own text and map credits. Almost everything lives in one folder, `custom_static`, so you can change it again whenever your branding changes.

Download all files in one ZIP: [Tutorial_Data_G3WSUITE.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Tutorial_Data_G3WSUITE.zip). The files for this video are in the folder `Tutorial_Data_G3WSUITE/tutorial_videos/style_your_g3w`.

## Before you start

- A G3W instance on GeoSpatial Hosting and an admin login

## Files

| File | What it is |
|---|---|
| `custom_static/css/custom.css` | Colour variables with the four demo colours already applied. |
| `custom_static/images/home/sample_landing.jpg` | Landing page image, 1300 x 872 pixels. |
| `custom_static/images/home/images.json` | Points the landing page to `sample_landing.jpg` and adds a photo credit. |
| `custom_static/logo_main.png, logo_reduced.png, logo_login.png, favicon.ico` | Logos for the fictional brand Sample Suite, with the same sizes and file names as the G3W defaults. |

## How to use them

1. Upload each file to the same place inside `custom_static` in the G3W file manager. File names must match exactly.
2. Step 3 colours: `--navbar-bg-color` and `--main-header-logo-bg-color` `#3B6E47`, `--landing-about-it-bg-color` `#6FAE7A`, `--landing-products-bg-color` `#2E523A`.
3. After each upload, hard refresh the page (Ctrl+Shift+R, or Cmd+Shift+R on a Mac).
4. To go back to your own branding later, keep a copy of your original `custom_static` files before you upload these.

## Credits

- Sample Suite is a fictional brand made for this demo.
