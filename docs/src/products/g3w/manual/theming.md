---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Customising G3W

G3W-SUITE supports customisation of its interface, enabling you to adapt the system to your organisation's branding and preferences, and improve the user experience.

You can change the colours, the landing page image, the logos and favicon, the texts on the landing page, and the credits shown in the map viewer. Almost all of it is done by replacing a few files in one folder, <span class="ui-filename">custom_static</span>, using the G3W-SUITE file manager.

A video walkthrough is available in the [G3W Essentials video series](../../../videos/g3w_essentials.md).

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    You must be logged in as an administrator to customise your G3W instance.
  </div>
</div>

<br>

## Before you start: the custom_static folder

1. Go to the G3W-SUITE <span class="ui-page-label">Administration Panel</span>.

2. Click the <span class="ui-generic-label">Gear</span> icon in the top navigation bar.

3. Under **File Manager**, select <span class="ui-generic-label">Files</span>.

4. Open the <span class="ui-filename">custom_static</span> folder.

<div class="image-with-caption">
  <img src="../../img/g3w-img-59.png" alt="Gear panel with Edit general data and Files">
  <div class="caption">The gear panel gives access to <b>Edit general data</b> and the <b>File Manager</b>.</div>
</div>

<br>

Everything you need lives inside <span class="ui-filename">custom_static</span>. Most of the other folders in the file manager are used by G3W-SUITE itself and should not be changed.

<div class="image-with-caption">
  <img src="../../img/g3w-img-60.png" alt="custom_static folder">
  <div class="caption">The <span class='ui-filename'>custom_static</span> folder.</div>
</div>

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Item</th>
      <th>What it controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="ui-filename">css/custom.css</span></td>
      <td>The colour variables of the interface (Step 1).</td>
    </tr>
    <tr>
      <td><span class="ui-filename">css/style.css</span></td>
      <td>Applies the colours to the page. You do not need to change it.</td>
    </tr>
    <tr>
      <td><span class="ui-filename">js/custom.js</span></td>
      <td>Optional custom scripting.</td>
    </tr>
    <tr>
      <td><span class="ui-filename">images/home/</span></td>
      <td>The landing page image and its <span class='ui-filename'>images.json</span> file (Step 2).</td>
    </tr>
    <tr>
      <td><span class="ui-filename">favicon.ico</span></td>
      <td>The icon shown in the browser tab (Step 3).</td>
    </tr>
    <tr>
      <td><span class="ui-filename">logo_main.png</span></td>
      <td>Logo shown when the left sidebar of the admin is expanded (Step 3).</td>
    </tr>
    <tr>
      <td><span class="ui-filename">logo_reduced.png</span></td>
      <td>Logo shown when the left sidebar of the admin is collapsed (Step 3).</td>
    </tr>
    <tr>
      <td><span class="ui-filename">logo_login.png</span></td>
      <td>Logo shown on the direct admin login page (Step 3).</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Uploading a file with the same name as an existing file replaces it. After each change, do a hard refresh of the page (<b>Ctrl + Shift + R</b> on Windows and Linux, <b>Cmd + Shift + R</b> on macOS) so your browser loads the new file instead of a cached copy.
  </div>
</div>

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    To try the steps below with ready-made files, download the <a href='../../files/sample-suite.zip'>Sample Suite example files</a>. They use the correct names and sizes for every file. See <a href='#sample-files'>Sample files</a>.
  </div>
</div>

<br>

## Step 1: Update the colours

1. Open <span class="ui-filename">custom_static/css</span>.

2. Right-click <span class="ui-filename">custom.css</span> and select <span class="ui-generic-label">Download</span>.

<div class="image-with-caption">
  <img src="../../img/g3w-img-61.png" alt="Download custom.css">
  <div class="caption">Right-click <span class='ui-filename'>custom.css</span> and select <b>Download</b>.</div>
</div>

<br>

3. Open the file in any text editor. At the top is a list of colour variables inside <code>:root { ... }</code>.

4. Change the hex values to your brand colours. Each colour is defined once and reused wherever it is needed, so changing one value updates every element that uses it. For example:

    - <code>--navbar-bg-color</code> and <code>--main-header-logo-bg-color</code> set the colour of the top navigation bar and the logo area.
    - <code>--landing-about-it-bg-color</code> and <code>--landing-products-bg-color</code> set the colours of the landing page panels.

5. Save the file.

<div class="image-with-caption">
  <img src="../../img/g3w-img-62.png" alt="custom.css in a text editor">
  <div class="caption">Edited values in <span class='ui-filename'>custom.css</span>.</div>
</div>

<br>

6. Go back to the <span class="ui-filename">css</span> folder in the file manager, click <span class="ui-generic-label">Upload</span>, click <span class="ui-generic-label">Select</span>, choose your edited <span class="ui-filename">custom.css</span>, and click <span class="ui-generic-label">Upload</span>.

<div class="image-with-caption">
  <img src="../../img/g3w-img-63.png" alt="Upload dialog">
  <div class="caption">The upload dialog.</div>
</div>

<br>

7. Refresh your admin page with a hard refresh. The new colours are applied across the interface.

<div class="image-with-caption">
  <img src="../../img/g3w-img-64.png" alt="Admin before">
  <div class="caption">Before</div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-65.png" alt="Admin after">
  <div class="caption">After changing <code>--navbar-bg-color</code> and <code>--main-header-logo-bg-color</code></div>
</div>

<br>

The complete list of variables and what each one controls is in the [CSS variables reference](#css-variables-reference).

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    If you need the original version of these files, you can download them from: https://github.com/kartoza/g3w-admin/tree/GeoHosting/g3w-admin/core/static/custom_static/css
  </div>
</div>

<br>

## Step 2: Update the landing page image

1. Open <span class="ui-filename">custom_static/images/home</span>.

2. Upload your new image. A wide, landscape image works best, because it stretches across the full width of the page.

3. Download <span class="ui-filename">images.json</span>, edit it, and upload it back into the same folder.

<div class="image-with-caption">
  <img src="../../img/g3w-img-68.png" alt="images/home folder">
  <div class="caption">The <span class='ui-filename'>images/home</span> folder with the new image and <span class='ui-filename'>images.json</span>.</div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-69.png" alt="images.json in a text editor">
  <div class="caption"><span class='ui-filename'>images.json</span> pointing to the new image, with a photo credit.</div>
</div>

<br>

The fields in <span class="ui-filename">images.json</span> are:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Field</th>
      <th>What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>image</code></td>
      <td>File name of the landing page image. It must exactly match the name of the file in the same folder.</td>
    </tr>
    <tr>
      <td><code>main_title_color</code></td>
      <td>Colour of the main title on top of the image.</td>
    </tr>
    <tr>
      <td><code>subtitle_color</code></td>
      <td>Colour of the subtitle on top of the image.</td>
    </tr>
    <tr>
      <td><code>main_color</code></td>
      <td>Colour of the other text on top of the image.</td>
    </tr>
    <tr>
      <td><code>author</code></td>
      <td>Optional. Name shown in the photo credit at the bottom left of the landing page.</td>
    </tr>
    <tr>
      <td><code>author_url</code></td>
      <td>Optional. Web address the photo credit links to.</td>
    </tr>
  </tbody>
</table>

<br>

Choose text colours that stay readable against your picture.

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    The image name in <span class='ui-filename'>images.json</span> must exactly match the name of your background image, and both files must be in the same folder. If no <span class='ui-filename'>images.json</span> file is present, G3W-SUITE automatically uses the first image in the folder.
  </div>
</div>

<br>

After a hard refresh, the landing page shows your new image, and the photo credit appears at the bottom left.

<div class="image-with-caption">
  <img src="../../img/g3w-img-66.png" alt="Landing page before">
  <div class="caption">Before</div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-67.png" alt="Landing page after">
  <div class="caption">After: new image, panel colours, texts and photo credit</div>
</div>

<br>

If the landing page doesn't display your updated image:

1. Right-click the page and select <span class="ui-generic-label">Open DevTools</span> / <span class="ui-generic-label">Inspect Element</span>.

2. In the top-bar, open the <span class="ui-generic-label">Network</span> tab.

3. Check <span class="ui-generic-label">Disable cache</span> and reload the page.

4. Uncheck <span class="ui-generic-label">Disable cache</span> and close DevTools.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-54.png" alt="Disable cache">
</div>

<br>

## Step 3: Update the logos and favicon

1. Open the <span class="ui-filename">custom_static</span> folder.

2. Upload your own versions of the files below, **keeping the same file names**. You can select all four at once.

<table class="my-table-style">
  <thead>
    <tr>
      <th>File</th>
      <th>Where it appears</th>
      <th>Size (pixels)</th>
      <th>Format</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="ui-filename">favicon.ico</span></td>
      <td>Browser tab.</td>
      <td>28 × 36</td>
      <td>PNG with transparent background, saved with the <code>.ico</code> name.</td>
    </tr>
    <tr>
      <td><span class="ui-filename">logo_main.png</span></td>
      <td>Top-left corner of the admin, when the left sidebar is expanded.</td>
      <td>175 × 36</td>
      <td>PNG with transparent background.</td>
    </tr>
    <tr>
      <td><span class="ui-filename">logo_reduced.png</span></td>
      <td>Top-left corner of the admin, when the left sidebar is collapsed.</td>
      <td>28 × 36</td>
      <td>PNG with transparent background.</td>
    </tr>
    <tr>
      <td><span class="ui-filename">logo_login.png</span></td>
      <td>The direct admin login page (<code>/en/login/</code>).</td>
      <td>236 × 46</td>
      <td>PNG with transparent background.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Keep the original dimensions and use a PNG with a transparent background, so your logo looks clean on any colour. <span class='ui-filename'>logo_main.png</span> and <span class='ui-filename'>logo_reduced.png</span> sit on the colour of <code>--main-header-logo-bg-color</code>, so use light artwork on a dark colour. <span class='ui-filename'>logo_login.png</span> is shown on a light grey page, so it needs dark or mid-tone artwork to stay readable.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-70.png" alt="Admin with sidebar expanded">
  <div class="caption"><span class='ui-filename'>logo_main.png</span> with the sidebar expanded.</div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-71.png" alt="Admin with sidebar collapsed">
  <div class="caption"><span class='ui-filename'>logo_reduced.png</span> with the sidebar collapsed.</div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-72.png" alt="Login page">
  <div class="caption"><span class='ui-filename'>logo_login.png</span> on the direct login page.</div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-73.png" alt="Favicon in the browser tab">
  <div class="caption"><span class='ui-filename'>favicon.ico</span> in the browser tab.</div>
</div>

<br>

If you still see an old logo, do a hard refresh. Browsers keep icons in the cache for a long time.

## Step 4: Update the general data and credits

The texts on your landing page, the About panel and the credits in the map viewer are not files. They are set in the admin panel.

1. Go to the G3W-SUITE <span class="ui-page-label">Administration Panel</span>.

2. Click the <span class="ui-generic-label">Gear</span> icon in the top navigation bar.

3. Under **Configurations**, select <span class="ui-generic-label">Edit general data</span>.

4. Fill in your details and click <span class="ui-generic-label">Save</span> at the bottom of the page.

<div class="image-with-caption">
  <img src="../../img/g3w-img-74.png" alt="Edit general data page">
  <div class="caption">The <b>General suite data</b> page.</div>
</div>

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Section</th>
      <th>Field</th>
      <th>Where it appears</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Frontend home data</td>
      <td>Title, Subtitle, Home description</td>
      <td>Landing page, next to the image.</td>
    </tr>
    <tr>
      <td>Frontend home data</td>
      <td>Suite logo, Suite logo URL</td>
      <td>A logo, and the address it links to, shown on the landing page.</td>
    </tr>
    <tr>
      <td>Frontend about data</td>
      <td>About title, About name, About phone, About email, About address, About description</td>
      <td>The <em>About</em> panel.</td>
    </tr>
    <tr>
      <td>Frontend groups map data</td>
      <td>Groups title, Groups map description</td>
      <td>Heading and text at the top of the <em>Maps</em> page.</td>
    </tr>
    <tr>
      <td>Frontend login data</td>
      <td>Login description</td>
      <td>Text on the login panel of the landing page. The <em>Login title</em> field is not displayed by the current landing page.</td>
    </tr>
    <tr>
      <td>Frontend social data</td>
      <td>Facebook, Twitter, Google+, YouTube, Instagram, Flickr and Tripadvisor links</td>
      <td>Icons in the <em>About</em> panel. Only the links you fill in are shown.</td>
    </tr>
    <tr>
      <td>Map client data</td>
      <td>Main map title</td>
      <td>Title used by the map client.</td>
    </tr>
    <tr>
      <td>Map client data</td>
      <td>Credits</td>
      <td>The <b>Credits</b> window of the map viewer (see below).</td>
    </tr>
    <tr>
      <td>Registration</td>
      <td>Registration intro</td>
      <td>Introduction text on the registration form.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Fields marked as translatable are saved for the language you are using in the admin. If your users use another language, switch the language of the admin and fill in the fields again.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-75.png" alt="About panel">
  <div class="caption">The <em>About</em> panel with the new details.</div>
</div>

<br>

### Credits in the map viewer

The **Credits** field is pre-filled with the default credits for Kartoza and G3W-SUITE. Add your own text, for example your organisation's name, a link to your website or any acknowledgements, **above** the existing text. Do not delete the existing credits.

To add text above the existing block, click in the first line of the text at the top of the field, press <code>Ctrl + Home</code>, type your text and press <code>Enter</code>.

<div class="image-with-caption">
  <img src="../../img/g3w-img-76.png" alt="Credits window in the map viewer">
  <div class="caption">The <b>Credits</b> window in the map viewer, with the custom line at the top.</div>
</div>

<br>

## Step 5: Update the site title

1. Go to the G3W-SUITE <span class="ui-page-label">Administration Panel</span>.

2. Click the <span class="ui-generic-label">Gear</span> icon in the top navigation bar.

3. Under **Configurations**, select <span class="ui-generic-label">Django administration</span>.

4. On Admin page, under **Constance**, click <span class="ui-generic-label">Config</span>.

5. In the <span class="ui-filename">Value</span> field, enter your new site title.

6. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-50.png" alt="Edit Site Title">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

When the page reloads, the website title displayed in the browser tab will update automatically.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-51.png" alt="Old vs. New Site Title">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## CSS variables reference

All the variables below are defined in <span class="ui-filename">custom_static/css/custom.css</span>. The default values are the ones that ship with GeoSpatial Hosting.

### Top navigation bar

<table class="my-table-style">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Default</th>
      <th>What it controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--navbar-bg-color</code></td>
      <td><code>#3E3E3E</code></td>
      <td>Background of the top navigation bar. Also the colour of selected tags in multi-select boxes.</td>
    </tr>
    <tr>
      <td><code>--navbar-link-color</code></td>
      <td><code>#ffffff</code></td>
      <td>Colour of the links and icons in the top navigation bar.</td>
    </tr>
    <tr>
      <td><code>--navbar-link-active-bg-color</code></td>
      <td><code>rgba(0, 0, 0, 0.1)</code></td>
      <td>Background of a navigation bar link when hovered, focused or open.</td>
    </tr>
    <tr>
      <td><code>--navbar-link-active-color</code></td>
      <td><code>#ffffff</code></td>
      <td>Text colour of a navigation bar link when hovered, focused or open.</td>
    </tr>
    <tr>
      <td><code>--sidebar-toggle-color</code></td>
      <td><code>#ffffff</code></td>
      <td>Colour of the sidebar toggle (☰) icon.</td>
    </tr>
    <tr>
      <td><code>--sidebar-toggle-hover-color</code></td>
      <td><code>#f6f6f6</code></td>
      <td>Colour of the sidebar toggle icon when hovered.</td>
    </tr>
    <tr>
      <td><code>--sidebar-toggle-hover-bg-color</code></td>
      <td><code>#e08e0b</code></td>
      <td>Background of the sidebar toggle button when hovered.</td>
    </tr>
    <tr>
      <td><code>--navbar-dropdown-list-divider-bg-color</code></td>
      <td><code>rgba(255, 255, 255, 0.1)</code></td>
      <td>Colour of the divider lines in navigation bar dropdown menus (small screens).</td>
    </tr>
    <tr>
      <td><code>--navbar-dropdown-list-link-color</code></td>
      <td><code>#fff</code></td>
      <td>Colour of links in navigation bar dropdown menus (small screens).</td>
    </tr>
    <tr>
      <td><code>--navbar-dropdown-list-link-hover-bg</code></td>
      <td><code>#e08e0b</code></td>
      <td>Background of links in navigation bar dropdown menus when hovered (small screens).</td>
    </tr>
  </tbody>
</table>

<br>

### Logo area and headers

<table class="my-table-style">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Default</th>
      <th>What it controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--main-header-logo-bg-color</code></td>
      <td><code>#3E3E3E</code></td>
      <td>Background behind the logo in the top-left corner (<span class="ui-filename">logo_main.png</span> and <span class="ui-filename">logo_reduced.png</span>).</td>
    </tr>
    <tr>
      <td><code>--main-header-logo-color</code></td>
      <td><code>#ffffff</code></td>
      <td>Text colour of the logo area, used when there is no logo image.</td>
    </tr>
    <tr>
      <td><code>--main-header-logo-hover-bg-color</code></td>
      <td><code>#db8b0b</code></td>
      <td>Background of the logo area when hovered.</td>
    </tr>
    <tr>
      <td><code>--user-header-bg-color</code></td>
      <td><code>#f39c12</code></td>
      <td>Background of the header of the user menu.</td>
    </tr>
    <tr>
      <td><code>--content-header-bg</code></td>
      <td><code>transparent</code></td>
      <td>Background of the page title strip above the page content.</td>
    </tr>
  </tbody>
</table>

<br>

### Left sidebar

<table class="my-table-style">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Default</th>
      <th>What it controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--wrapper-main-sidebar-left-side-bg-color</code></td>
      <td><code>#3F3F3F</code></td>
      <td>Background of the left sidebar and of the gear (settings) panel on the right.</td>
    </tr>
    <tr>
      <td><code>--user-panel-info</code></td>
      <td><code>#fff</code></td>
      <td>Text colour of the user information in the sidebar.</td>
    </tr>
    <tr>
      <td><code>--sidebar-menu-list-header-color</code></td>
      <td><code>#ffffff</code></td>
      <td>Text colour of section headings in the sidebar (for example <em>MENU</em> and <em>ACL</em>).</td>
    </tr>
    <tr>
      <td><code>--sidebar-menu-list-header-bg</code></td>
      <td><code>#3E3E3E</code></td>
      <td>Background of section headings in the sidebar.</td>
    </tr>
    <tr>
      <td><code>--sidebar-menu-list-link-color</code></td>
      <td><code>#ffffff</code></td>
      <td>Text colour of sidebar menu links, including when hovered or active.</td>
    </tr>
    <tr>
      <td><code>--sidebar-menu-list-link-bg</code></td>
      <td><code>#57A0C7</code></td>
      <td>Background of a sidebar menu link when hovered or active.</td>
    </tr>
    <tr>
      <td><code>--sidebar-menu-list-link-border-left-color</code></td>
      <td><code>#ffffff</code></td>
      <td>Colour of the left accent border of a sidebar menu link when hovered or active.</td>
    </tr>
    <tr>
      <td><code>--sidebar-treeview-bg-color</code></td>
      <td><code>#555555</code></td>
      <td>Background of expandable menu items.</td>
    </tr>
    <tr>
      <td><code>--treeview-menu-bg</code></td>
      <td><code>#626262</code></td>
      <td>Background of the sub-menu inside an expandable menu item.</td>
    </tr>
    <tr>
      <td><code>--treeview-menu-list-active-link</code></td>
      <td><code>#ffffff</code></td>
      <td>Colour of the active or hovered link inside a sub-menu.</td>
    </tr>
    <tr>
      <td><code>--sidebar-link-hover-text-decor</code></td>
      <td><code>none</code></td>
      <td>Text decoration of sidebar links when hovered (for example <code>none</code> or <code>underline</code>).</td>
    </tr>
    <tr>
      <td><code>--sidebar-form-border</code></td>
      <td><code>1px solid #374850</code></td>
      <td>Border of the search box in the sidebar.</td>
    </tr>
    <tr>
      <td><code>--sidebar-form-btn-border</code></td>
      <td><code>1px solid transparent</code></td>
      <td>Border of the search field and button in the sidebar.</td>
    </tr>
    <tr>
      <td><code>--sidebar-form-btn</code></td>
      <td><code>#999</code></td>
      <td>Background and icon colour of the search box in the sidebar.</td>
    </tr>
    <tr>
      <td><code>--sidebar-form-input-text-color</code></td>
      <td><code>#666</code></td>
      <td>Text colour inside the sidebar search field.</td>
    </tr>
    <tr>
      <td><code>--sidebar-form-input-text-focus-bg-color</code></td>
      <td><code>#fff</code></td>
      <td>Background of the sidebar search field when focused.</td>
    </tr>
    <tr>
      <td><code>--sidebar-form-input-text-focus-color</code></td>
      <td><code>#666</code></td>
      <td>Text colour of the sidebar search field when focused.</td>
    </tr>
    <tr>
      <td><code>--sidebar-form-input-text-focus-btn</code></td>
      <td><code>#fff</code></td>
      <td>Colour of the border between the search field and button when focused.</td>
    </tr>
  </tbody>
</table>

<br>

### Landing page panels

<table class="my-table-style">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Default</th>
      <th>What it controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--landing-about-it-bg-color</code></td>
      <td><code>#57A0C7</code></td>
      <td>Colour of the <em>About</em> panel (first panel) on the landing page.</td>
    </tr>
    <tr>
      <td><code>--landing-guestbook-bg-color</code></td>
      <td><code>#ECB44B</code></td>
      <td>Colour of the <em>Maps</em> panel (second panel) on the landing page. Also used for button highlights in the map viewer.</td>
    </tr>
    <tr>
      <td><code>--landing-products-bg-color</code></td>
      <td><code>#3E3E3E</code></td>
      <td>Colour of the <em>Admin</em> panel (third panel) on the landing page.</td>
    </tr>
  </tbody>
</table>

<br>

### Buttons, tags and legend

<table class="my-table-style">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Default</th>
      <th>What it controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--btn-info-bg-color</code></td>
      <td><code>#57A0C7</code></td>
      <td>Background of information buttons.</td>
    </tr>
    <tr>
      <td><code>--btn-success-bg-color</code></td>
      <td><code>#ECB44B</code></td>
      <td>Background of success buttons (for example <em>Save</em>).</td>
    </tr>
    <tr>
      <td><code>--btn-success-border-color</code></td>
      <td><code>#ECB44B</code></td>
      <td>Border of success buttons.</td>
    </tr>
    <tr>
      <td><code>--acl-users-bg-color</code></td>
      <td><code>#3E3E3E</code></td>
      <td>Background of the purple label used for users and groups, and the border of selected tags in multi-select boxes.</td>
    </tr>
    <tr>
      <td><code>--select-2-bg-color</code></td>
      <td><code>#555555</code></td>
      <td>Background of selected tags in multi-select boxes.</td>
    </tr>
    <tr>
      <td><code>--layer-legent-bg-color</code></td>
      <td><code>rgba(0, 0, 0, 0)</code></td>
      <td>Background of the layer legend in the map viewer. The spelling <code>legent</code> is the name used in the file.</td>
    </tr>
  </tbody>
</table>

<br>

### Defined but not used by the default styles

<table class="my-table-style">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Default</th>
      <th>What it controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--skin-color</code></td>
      <td><code>#3E3E3E</code></td>
      <td>Not referenced by <span class="ui-filename">style.css</span>, so changing it has no visible effect with the default styles.</td>
    </tr>
    <tr>
      <td><code>--sidebar-link-color</code></td>
      <td><code>#b8c7ce</code></td>
      <td>Not referenced by <span class="ui-filename">style.css</span>, so changing it has no visible effect with the default styles.</td>
    </tr>
    <tr>
      <td><code>--sidebar-form-btn-bg-color</code></td>
      <td><code>#374850</code></td>
      <td>Not referenced by <span class="ui-filename">style.css</span>, so changing it has no visible effect with the default styles.</td>
    </tr>
  </tbody>
</table>

<br>

## Sample files

The Sample Suite example files show the correct names, sizes and formats. Use them as templates for your own files.

- [Download all example files (ZIP)](../files/sample-suite.zip). The folder structure matches <span class="ui-filename">custom_static</span>.
- Logos and favicon: [favicon.ico](../files/sample-suite/favicon.ico), [logo_main.png](../files/sample-suite/logo_main.png), [logo_reduced.png](../files/sample-suite/logo_reduced.png), [logo_login.png](../files/sample-suite/logo_login.png)
- Landing page: [sample_landing.jpg](../files/sample-suite/images/home/sample_landing.jpg) (1300 × 872 pixels) and [images.json](../files/sample-suite/images/home/images.json)
- Colours: [custom.css](../files/sample-suite/css/custom.css)

<br>

<img src="../../files/sample-suite/logo_main.png" alt="logo_main.png on a dark background" style="background:#3B6E47;padding:8px 12px;border-radius:4px">
<img src="../../files/sample-suite/logo_reduced.png" alt="logo_reduced.png on a dark background" style="background:#3B6E47;padding:8px 12px;border-radius:4px">
