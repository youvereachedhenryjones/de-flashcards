# DE Flashcards — UX Review
**Reviewer:** Luna  
**Date:** March 2, 2026  
**App:** https://de-flashcards-rho.vercel.app  
**User:** Ryan Kirsch (Senior Data Engineer, actively interviewing)

---

## Executive Summary

This is a **solid MVP** with good fundamentals: clean dark UI, SM-2 spaced repetition, localStorage persistence, and basic topic filtering. The core loop (flip → rate → next) works well.

**Critical gap:** The app treats all 405 cards as one giant deck. For interview prep, Ryan needs **granular topic control** (multi-select filters, per-topic progress) and **session intelligence** (show me 20 Kafka cards I'm weak on).

**Biggest opportunity:** Transform this from a "flashcard viewer" into a **personalized study coach** with progress insights, confidence tracking, and smart session planning.

---

## Scores by Category

| Category | Score | Notes |
|----------|-------|-------|
| **Information Architecture** | 5/10 | Topic filter incomplete (8/13 topics), no multi-select, no card counts |
| **Mobile UX** | 6/10 | Works but basic — no swipe, small touch targets, click-based flip |
| **Study Session Flow** | 4/10 | SM-2 works but no mastery tracking, no undo, no session summary |
| **Visual Design** | 7/10 | Clean and professional, but static (minimal animation/feedback) |
| **Missing Features** | 3/10 | No progress by topic, no review history, no search, no study time estimates |

**Overall:** 5/10 — Functional but lacks depth for serious interview prep.

---

## P1 Improvements (High Impact, Achievable)

### 1. **Complete Topic Filters + Multi-Select**
**Problem:** Filter bar only shows 8 of 13 topics. Can't combine "dbt + Dagster" for targeted prep.  
**Solution:**
- Add missing topics: SQL, Python, Cloud/AWS, Snowflake, DuckDB, Data Quality
- Enable multi-select with checkboxes or pill toggles
- Show card count per topic: `Kafka (32 due / 45 total)`
- Add "Select All" and "Clear" buttons

**Impact:** This is the #1 blocker. Ryan needs to drill specific combinations before interviews.

**Implementation:** Modify `FILTERS` array to include all 13 topics. Change `activeFilter` from string to Set. Update `getFilteredDueCards()` to check membership in the set.

---

### 2. **Confidence Tracking + Review Queue**
**Problem:** No way to mark cards as "mastered" vs "needs review." Can't focus on weak areas.  
**Solution:**
- Add confidence level to each card (0-100%, derived from rating history)
- Create "Review Again" queue for cards rated "Again" or "Hard"
- Add study modes:
  - **All Cards** (current behavior)
  - **Weak Cards** (confidence < 60%)
  - **Review Again** (cards you got wrong in last session)
  - **New Cards** (never studied)

**Impact:** Lets Ryan focus on weak spots instead of cycling through everything.

**Implementation:** Add `confidence` field to card schema (0-100). Decrement on "Again"/"Hard", increment on "Good"/"Easy". Add study mode selector above filters.

---

### 3. **Session Summary + Progress by Topic**
**Problem:** No feedback on study effectiveness. Can't see "I've mastered Kafka but struggle with Airflow."  
**Solution:**
- After rating the last due card, show session summary:
  - Cards reviewed: 15
  - Accuracy: 80% (12 Good/Easy, 3 Again/Hard)
  - Topics covered: Kafka (8), Spark (4), dbt (3)
  - Estimated next review: 12 cards tomorrow, 8 in 3 days
- Add "Progress" tab with per-topic breakdown:
  - Topic name, total cards, mastered (conf > 80%), weak (conf < 60%), avg confidence

**Impact:** Builds motivation (streak, progress) and reveals knowledge gaps.

**Implementation:** Track session stats in memory. On last card, show modal/overlay. Add "Progress" tab that groups cards by topic and computes stats.

---

## P2 Improvements (Nice to Have)

### 1. **Keyboard Shortcuts + Swipe Gestures**
- Desktop: `Space` to flip, `1-4` to rate, `→` for next card
- Mobile: Swipe left/right to rate (left = Again, right = Easy), tap to flip
- Add tooltip/help button showing shortcuts

**Impact:** Speeds up study sessions for power users (Ryan's a dev, he'll love this).

---

### 2. **Estimated Study Time + Smart Sessions**
- Show "You have 25 cards due (≈15 min)" at top
- Add "Quick Drill" mode: "Study 10 Kafka cards in 5 minutes"
- Allow saving custom sessions: "Capital One Prep" = Kafka + Spark + AWS (weak cards only)

**Impact:** Helps Ryan fit study into busy interview schedule.

---

### 3. **Visual Polish: Progress Bar + Animations**
- Add linear progress bar showing position in session (card 5 / 25)
- Animate card transitions (slide in/fade)
- Add haptic feedback on mobile when rating
- Show confetti/checkmark when finishing a session

**Impact:** Makes the app feel polished and rewarding (gamification).

---

## The Feature That Would 10x the Value

### **AI-Powered Question Targeting**
**The Big Idea:** Use Ryan's rating history + job descriptions to dynamically prioritize cards.

**How it works:**
1. Ryan pastes a job description or company name ("Capital One Data Engineer")
2. App parses keywords (Kafka, Spark, AWS Kinesis, real-time pipelines)
3. Prioritizes cards matching those topics + low confidence
4. Creates a custom "Capital One Prep" session with 20-30 high-value cards
5. After the interview, Ryan marks which questions actually came up → app learns

**Why it's 10x:**
- Transforms passive study into **active interview simulation**
- Reduces noise (405 cards → focused 20-card sessions)
- Leverages Ryan's domain knowledge (he knows what Capital One asks)
- Creates a feedback loop (interview → app learns → better prep)

**Implementation:**
- Add "New Session" flow with company/JD input
- Use keyword matching (or OpenAI embeddings for semantic matching)
- Weight cards by: topic match × (1 - confidence)
- Store custom sessions in localStorage
- Add "Interview Debrief" form to mark which cards were relevant

---

## Quick Wins (Under 1 Hour Each)

1. **Add missing topics to filter** (5 min)
2. **Show card counts in filters** — `Kafka (18)` (10 min)
3. **Add "Undo" button** after rating (15 min)
4. **Increase font size on mobile** (5 min)
5. **Add keyboard shortcuts** (Space = flip, 1-4 = rate) (30 min)
6. **Show session count** — "Card 5 of 18" → persist across ratings (10 min)

---

## Accessibility Issues

1. **Color-only rating buttons** — Add icons:
   - Again: ❌ (red)
   - Hard: ⚠️ (yellow)
   - Good: ✓ (teal)
   - Easy: ⭐ (blue)

2. **No focus states** — Ensure tab navigation works (add `:focus-visible` styles)

3. **Small touch targets** — Filter buttons are 12px font with 6px padding. Recommendation: min 44×44px tap target (Apple HIG).

---

## Mobile-Specific Issues

1. **Horizontal scroll in filters** — Hard to scroll with no visual indicator. Add left/right fade gradients.
2. **No haptic feedback** — Add Vibration API on rating for tactile confirmation.
3. **Card text can overflow** — Long answers need `overflow-y: auto` or pagination.

---

## Technical Debt Notes

1. **Supabase auth is half-baked** — Magic link flow works but no error recovery if email fails. No loading states.
2. **localStorage + Supabase sync is risky** — Race conditions if user studies on two devices. Consider Supabase as source of truth.
3. **No card versioning** — If you update a card's answer, existing progress is lost. Consider versioning or content hashing.

---

## Design System Recommendations

### Color Palette (Current)
- Background: `#0F0F1A` (very dark blue)
- Card: `#1A1A2E` (dark slate)
- Accent: `#0D9488` (teal)
- Text: `#F5F0EB` (warm white)

**Recommendation:** Current palette is solid. Consider adding:
- Success green: `#10B981` (for "mastered" badges)
- Warning orange: `#F59E0B` (for "needs review")
- Neutral gray: `#6B7280` (for disabled states)

### Typography
- **Current:** Inter (Google Fonts CDN)
- **Recommendation:** Keep Inter. Add font weights:
  - 300 for labels
  - 400 for body
  - 600 for headings
  - 700 for stats

### Component Hierarchy
1. **Primary action:** Card flip (center of screen)
2. **Secondary actions:** Rating buttons (below card)
3. **Tertiary actions:** Filters, nav tabs (above card)
4. **Utility:** Stats, settings (header/footer)

Current hierarchy is correct. No changes needed.

---

## Benchmarking Against Competitors

| Feature | DE Flashcards | Anki | Quizlet |
|---------|---------------|------|---------|
| Spaced repetition | ✅ SM-2 | ✅ SM-2+ | ❌ Basic |
| Multi-topic filter | ❌ | ✅ Decks | ✅ Sets |
| Progress tracking | ⚠️ Basic | ✅ Stats | ✅ Charts |
| Mobile UX | ⚠️ Click-only | ✅ Swipe | ✅ Swipe |
| Offline-first | ✅ | ✅ | ❌ |
| Custom cards | ✅ | ✅ | ✅ |
| Search | ❌ | ✅ | ✅ |
| Study modes | ❌ | ✅ Custom | ✅ Games |

**Takeaway:** DE Flashcards has the right foundation (SM-2, offline-first) but lacks **study intelligence** (progress, search, modes).

---

## Final Recommendations

### Prioritize This (Next 2 Weeks)
1. Complete topic filters + multi-select
2. Add confidence tracking + "weak cards" mode
3. Session summary overlay
4. Keyboard shortcuts

### Ship This for V2 (Next Month)
1. Progress tab with per-topic breakdown
2. Swipe gestures on mobile
3. Card search
4. Estimated study time

### Moonshot for V3 (3-6 Months)
1. AI-powered question targeting (job description → custom session)
2. Interview debrief (mark which cards were asked)
3. Community card packs (upvote/downgrade questions)
4. Spaced repetition insights (optimal study schedule)

---

## Contact

Questions? Ping Luna (@luna) or Ryan Kirsch (ryan@ryankirsch.dev).

**Next steps:**  
- Share this review with Ryan
- Prioritize P1 improvements
- Prototype multi-select filters + confidence tracking
- Test on mobile (iPhone + Android)

---

**TL;DR:** Solid foundation, needs topic granularity + progress insights to become a true interview prep tool. Fix filters first, then add confidence tracking. The 10x feature is AI-powered question targeting based on job descriptions.
