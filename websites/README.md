# Business Websites

Static landing pages for your businesses. Each folder is independent and can be deployed separately.

| Site | Folder | Port (local preview) |
|------|--------|----------------------|
| Modern Family Wellness | `../website/` | 8080 |
| Dr. Jonathon Ross (Chiropractic) | `chiropractic/` | 8081 |
| Tony's Plumbing | `tonys-plumbing/` | 8082 |

## Preview locally

```bash
# Chiropractic practice
cd websites/chiropractic && python3 -m http.server 8081

# Tony's Plumbing
cd websites/tonys-plumbing && python3 -m http.server 8082
```

## Customize before publishing

### Chiropractic (`chiropractic/`)
- Phone number and email in `index.html` and `script.js`
- Clinic name / address if different from personal branding
- Practice-specific services or credentials

### Tony's Plumbing (`tonys-plumbing/`)
- Tony's real phone number (search for `(000) 000-0000` and `+10000000000`)
- Email address (`info@tonysplumbing.com`)
- Service area cities/neighbourhoods in the `#area` section
- License number, years in business, or Google reviews (optional)

## Deploy

Drag any folder to [Netlify Drop](https://app.netlify.com/drop), or connect each folder as a separate project on Netlify/Vercel with its own custom domain.
