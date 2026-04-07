# SAM Analysis Prompt Template
<!-- PHASE 4: Template for individual trade analysis calls.
     Developer reference – actual string with {{PLACEHOLDERS}} is in analyzer.js
     as SAM_ANALYSIS_PROMPT_TEMPLATE. analyzer.js does the interpolation before
     sending to the AI API. -->

---

Analyze this trade for me:

**Trade Details**
- Symbol: {{SYMBOL}}
- Direction: {{DIRECTION}}
- Entry Price: ${{ENTRY_PRICE}} → Exit Price: ${{EXIT_PRICE}}
- Size: {{SIZE}} shares
- P&L: {{PNL_DOLLAR}} ({{PNL_PERCENT}}%)
- Session: {{SESSION}} (entered at {{ENTRY_TIME}})
- Setup Tag: {{SETUP_TAG}}
- Entry Notes: {{ENTRY_NOTES}}
- Exit Notes: {{EXIT_NOTES}}

**Emotion Track**
- At Entry: {{EMOTION_ENTRY}}/10 ({{EMOTION_ENTRY_LABEL}})
- At Exit: {{EMOTION_EXIT}}/10 ({{EMOTION_EXIT_LABEL}})

**Trader Context**
- Current Streak: {{STREAK_DAYS}} days, {{STREAK_SCORE}}/100 points
- Overall Win Rate (all time): {{OVERALL_WIN_RATE}}%
- Total Closed Trades: {{TOTAL_CLOSED}}

**Similar Past Trades (same setup or symbol, last 5)**
{{SIMILAR_TRADES_LIST}}

**Session Stats for this trader**
- {{SESSION}} win rate: {{SESSION_WIN_RATE}}%
- Win rate when emotionAtEntry > 7: {{HIGH_EMOTION_WIN_RATE}}%
- This setup ({{SETUP_TAG}}) win rate: {{SETUP_WIN_RATE}}% ({{SETUP_COUNT}} trades)

---

Give me The Read, The Pattern, and The Fix. Keep it under 200 words. Be SAM.
