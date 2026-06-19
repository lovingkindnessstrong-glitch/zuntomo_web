# ZUNTOMO Website Project Guidelines
This document defines the single source of truth (SSOT) for the ZUNTOMO website project. All UI/UX implementation and routing must strictly adhere to these rules.

## 1. Directory Structure
Maintain a flat and purpose-driven architecture separating conversion hubs from content layers.
**Target Audience:** 沼津・三島を中心とした県東部の大人向けZUMBA・キッズダンス

| Route | UI Display Name | Meta Title | H1 Tag |
|-------|-----------------|-----------|--------|
| `/` | ホーム | ダンスサークル「ズンとも」\| 沼津・三島の大人向けZUMBA・キッズダンス教室 | ダンスサークル「ズンとも」へようこそ |
| `/kids/` | キッズクラス | キッズダンスクラス\| ズンとも \| 沼津・三島のキッズ向けダンス教室 | キッズダンスクラス |
| `/about/` | 運営者情報 | 運営者情報\| ズンとも \| 信頼できるダンス講師たち | 運営者情報・E-E-A-T |
| `/news/` | 活動報告 | 活動報告・イベント情報\| ズンとも \| 最新レッスン情報・発表会 | 活動報告 |
| `/library/` | レッスン動画 | レッスン動画・アーカイブ\| ズンとも \| ZUMBA・キッズダンス動画集 | レッスン動画ライブラリ |

**Architecture Notes:**
- `/` & `/kids/` : Conversion Hub (Adult Class LP & Kids Class LP)
- `/about/` : E-E-A-T Hub (Trust & Credibility)
- `/news/` : Traffic Hub (Content & SEO)
- `/library/` : Archive & Reference Hub (Video Content)

## 2. URL & Slug Conventions
- **Language & Format:** Use strictly English words, lowercase, and kebab-case (e.g., `event-report-numazu`).
- **No Dates:** Do NOT include dates in URLs (manage dates via `<time>` tags).
- **Redirection:** Ensure 301 redirects are mapped for any legacy URLs migrating to `/news/`.

## 3. Design System
- **Base Color (Background):** Warm off-white (Do NOT use pure white `#FFFFFF`).
- **Main Color:** Pastel Blue & Soft Navy (Use for text and borders).
- **Accent Color:**
  - Conversion Buttons (e.g., Official LINE): LINE Green (`#06C755`).
  - Highlight Badges / Accent touches: Coral Pink.

## 4. Typography & Breakpoints
- **Font Family:** Noto Sans JP (or similar readable, modern sans-serif).
- **Responsive Strategy:** Mobile-first approach. 
  - Base styles target mobile devices.
  - Desktop breakpoint: `min-width: 768px` (Adjust layout for larger screens).

## 5. UI & Asset Implementation Rules
- **UI Components:** Build all buttons, backgrounds, and borders using strictly HTML/CSS. Do NOT use generated image files for UI elements.
- **Icons:** Use inline SVG code for generic icons (arrows, checkmarks, etc.).
- **Images:** Use image files (JPG/PNG/WebP) ONLY for "real images" such as logos or actual photographs.
- **Image SEO:** All images must have appropriate, descriptive `alt` attributes and SEO-friendly file names.

## 6. SEO & Meta Tags
- **Title Format:** `[Page Specific Name] | ダンスサークル「ズンとも」` (e.g., `キッズクラス案内 | ダンスサークル「ズンとも」`).
- **Internal Linking:** Every page in `/news/` and `/library/` must include fixed CTA buttons linking back to the Conversion Hubs (`/` or `/kids/`).

## 7. SEO & Content Strategy
### "かんなみ猫おどり" Content Strategy
Leverage "かんなみ猫おどり" (Kannami Cat Dance Festival) as a powerful local SEO anchor. Maintain overall site structure integrity while strategically distributing content across pages:

- **`/news/` (Activity Reports):** Primary landing hub for participation reports. Feature detailed event coverage, behind-the-scenes photos, and participant testimonials.
  
- **`/kids/` (Kids Class):** Showcase event participation as a conversion driver. Add a dedicated section highlighting kids' performance track record at "かんなみ猫おどり" to motivate enrollment.
  
- **`/library/` (Lesson Videos):** Archive practice footage, choreography videos, and performance clips. Drive organic discovery through video search results, linking viewers back to circle awareness and enrollment CTAs.
  
- **`/` (Top Page - Adult ZUMBA Hub):** Maintain brand focus on Adult ZUMBA by keeping "かんなみ猫おどり" mentions light and supporting. Reference only as "key event" without overemphasis to preserve primary SEO positioning.

## 8. Technology Stack & Migration Rules
- **Framework:** Astro (Static Site Generation).
- **Migration Strategy:** Strictly preserve and repurpose existing HTML structures and CSS variables. The AI agent must NOT alter the established design system, color codes, or CSS classes during the Astro component conversion unless explicitly instructed.

## 9. AI Development Protocol (For Cline/Gemini)
- **SSOT Compliance:** The AI agent must read and adhere to this `projet_guidlines.md` before executing any file modifications or creating new routes.
- **Safety & Diff:** Prioritize non-destructive edits. When migrating existing assets to Astro, maintain the exact visual output.q