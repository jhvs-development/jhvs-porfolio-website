# GoDaddy Deployment Guide

## 🚀 Production Build Ready!

Your portfolio website has been successfully built and is ready for deployment to GoDaddy hosting.

## 📁 Deployment Files

The production-ready files are located in the `out/` directory:

```
out/
├── index.html          # Main homepage
├── 404.html           # Custom 404 page
├── favicon.ico        # Site favicon
├── _next/             # Next.js optimized assets
├── projects/          # Project images
└── *.svg, *.jpeg      # Static assets
```

## 🌐 GoDaddy Deployment Steps

### Method 1: File Manager (Recommended for GoDaddy)

1. **Login to GoDaddy cPanel**
   - Go to your GoDaddy hosting account
   - Access cPanel/File Manager

2. **Navigate to public_html**
   - Open File Manager
   - Go to `public_html` directory (this is your website root)

3. **Upload Files**
   - **Option A**: Zip the `out` folder contents and upload
     ```bash
     cd out
     zip -r portfolio-website.zip .
     ```
   - **Option B**: Upload files directly via drag & drop

4. **Extract & Configure**
   - If using zip: Extract all files to `public_html` root
   - Ensure `index.html` is in the root of `public_html`
   - Set proper file permissions (755 for folders, 644 for files)

### Method 2: FTP Upload

1. **FTP Credentials**
   - Get FTP details from GoDaddy hosting settings
   - Host: Usually your domain or an IP
   - Username: Your hosting username
   - Password: Your hosting password

2. **Upload via FTP Client**
   ```bash
   # Using FileZilla, WinSCP, or command line
   # Upload entire contents of 'out' folder to public_html
   ```

## ⚙️ Post-Deployment Configuration

### 1. Domain Setup
- Point your domain to GoDaddy hosting (if not already done)
- Wait for DNS propagation (can take 24-48 hours)

### 2. SSL Certificate
- Enable SSL in GoDaddy hosting settings
- Ensure HTTPS redirect is configured

### 3. .htaccess Configuration (Optional)
Create `.htaccess` in public_html for better performance:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Enable browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Redirect to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Single Page Application support
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 🔧 Build Information

- **Framework**: Next.js 15.3.4 with App Router
- **Build Type**: Static Export (SSG)
- **Output Size**: ~117KB (optimized)
- **Responsive**: Fully mobile-responsive design
- **Browser Support**: Modern browsers (ES2017+)

## 📊 Website Features

✅ **Performance Optimized**
- Static site generation (SSG)
- Image optimization
- Code splitting
- Minified assets

✅ **SEO Ready**
- Meta tags for social sharing
- Structured data
- Semantic HTML
- Fast loading times

✅ **Mobile Responsive**
- Breakpoint coverage: 320px → 1920px+
- Touch-friendly navigation
- Optimized for all devices

✅ **Professional Portfolio Features**
- Hero section with typewriter animation
- Interactive timeline for experience
- Project carousel with filtering
- Contact form ready for integration
- Skills visualization
- Modern VSCode-inspired design

## 🛠️ Future Updates

To update your website:

1. Make changes to source code
2. Run `npm run build` 
3. Upload new `out/` folder contents to GoDaddy
4. Clear any caching if needed

## 📞 Support

If you encounter any issues during deployment:
- Check GoDaddy documentation for file upload procedures
- Ensure all files maintain their directory structure
- Verify DNS settings are pointing to the correct hosting
- Test on multiple devices after deployment

---

**Your portfolio is ready to go live! 🎉**
