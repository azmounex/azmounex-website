# Cloudinary Integration Guide

## Setup Complete ✅

Your portfolio project is now configured to use Cloudinary for image storage with the following setup:

### Credentials Added
- **Cloud Name**: azmounex
- **API Key**: 482369926253518
- **Secret Key**: XLqZOZRFZAjCjCYMR8B7pA8fGEA

## What Changed

### 1. Project Images
- **Upload Location**: Backend → Cloudinary
- **Benefits**: Images now served from Cloudinary CDN, automatic optimization
- **How it works**: When you upload a project image via `/api/projects`, it automatically goes to Cloudinary

### 2. Team Images  
- **Upload Location**: Backend → Cloudinary
- **Benefits**: Same as projects - CDN delivery, automatic optimization
- **How it works**: Team member images uploaded to `/api/team-members` go directly to Cloudinary

### 3. Hero Section Images
- **Storage**: `frontend/src/assets/hero_section/` (moved from backend)
- **Benefits**: No external API calls needed during page load
- **How it works**: Hero images are bundled with your frontend build
- **Paths in DB**: `/assets/hero_section/hero_section_image_X.png`

## Testing the Setup

### 1. Start Backend
```bash
cd backend
npm run dev
```

### 2. Run Seed Data (if needed)
```bash
npm run seed
```
This will populate hero slides with the new frontend asset paths.

### 3. Test Upload
- Create a new project with an image - it should upload to Cloudinary
- Create a team member with an image - it should upload to Cloudinary
- Check Cloudinary dashboard for images in `portfolio/projects` and `portfolio/staff` folders

## Important Notes

### Existing Images
- Old local uploads in `backend/uploads/` can be safely deleted after migration
- Hero section images have been copied to `frontend/src/assets/hero_section/`

### Database Updates
- If you have existing records with local file paths, they'll still work
- New uploads will automatically use Cloudinary URLs

### Production Deployment
- Make sure `.env` is properly configured in production
- Frontend hero images will be served as static assets
- Cloudinary images are CDN-backed and will work anywhere

## File Changes Summary

| File | Change |
|------|--------|
| `.env` | Added Cloudinary credentials |
| `backend/src/config/cloudinary.js` | NEW - Cloudinary config |
| `backend/src/middleware/upload.js` | Updated to use Cloudinary storage |
| `backend/src/controllers/projectController.js` | Updated to handle Cloudinary URLs |
| `backend/src/controllers/teamController.js` | Updated to handle Cloudinary URLs |
| `backend/src/controllers/publicController.js` | Simplified image normalization |
| `backend/src/scripts/seedContent.js` | Updated hero image paths |
| `frontend/src/assets/hero_section/` | NEW - Hero images moved here |

## Troubleshooting

**Images not uploading?**
- Check that Cloudinary credentials are correct in `.env`
- Verify `cloudinary` and `multer-storage-cloudinary` packages are installed

**Old images not showing?**
- Check if they're using old `/uploads/` paths
- Reseed the database with `npm run seed`

**Hero images not loading?**
- Verify images exist in `frontend/src/assets/hero_section/`
- Check that frontend is serving static assets correctly
