# DE Flashcards: dbt Advanced + Databricks Deck Creation
**Date:** 2026-03-19
**Created by:** Kai (DE Coach subagent)

---

## Summary

Two new flashcard decks created and wired into the DE Flashcards app.

---

## dbt Advanced Deck — 25 Cards

**File:** `public/cards/dbt-adv-cards.json`
**Individual cards:** `dbt-adv-001.json` through `dbt-adv-025.json`
**Category label:** `dbt Advanced`
**Color:** `#FF694B`

### Topics Covered

| Card | Topic |
|------|-------|
| dbt-adv-001 | ref() vs source() — what each is for |
| dbt-adv-002 | source() enables freshness checks (gotcha angle) |
| dbt-adv-003 | is_incremental() macro — how it works, first run vs incremental run |
| dbt-adv-004 | unique_key config — MERGE/upsert behavior |
| dbt-adv-005 | Three incremental strategies: append, merge, delete+insert |
| dbt-adv-006 | on_schema_change — options and gotchas (default 'ignore' silently drops columns) |
| dbt-adv-007 | Four built-in generic tests: not_null, unique, accepted_values, relationships |
| dbt-adv-008 | Generic tests vs singular tests — when to use each |
| dbt-adv-009 | Custom generic tests — how to write a macro in macros/ directory |
| dbt-adv-010 | Jinja templating — three block types: {{ }}, {% %}, {# #} |
| dbt-adv-011 | config() and {{ this }} — inline config and current relation reference |
| dbt-adv-012 | ref() inside macros — pattern for dynamic deduplication macro |
| dbt-adv-013 | dbt packages — packages.yml, dbt deps, hub.getdbt.com |
| dbt-adv-014 | dbt_utils and dbt_expectations — what each provides |
| dbt-adv-015 | table vs view materializations — trade-offs |
| dbt-adv-016 | ephemeral materialization — when to use, when to avoid |
| dbt-adv-017 | Model contracts (dbt 1.5+) — enforced schema validation |
| dbt-adv-018 | Model versioning (dbt 1.5+) — non-breaking changes via v1/v2 |
| dbt-adv-019 | Snapshots — SCD Type 2, dbt_valid_from/to columns |
| dbt-adv-020 | Snapshot strategies: timestamp vs check — gotcha on silent missed changes |
| dbt-adv-021 | Seeds — when to use, column_types override for zip codes gotcha |
| dbt-adv-022 | dbt Cloud vs dbt Core — what Cloud adds |
| dbt-adv-023 | Exposures — metadata for downstream artifacts, blast-radius analysis |
| dbt-adv-024 | Source freshness — loaded_at_field, warn_after, error_after |
| dbt-adv-025 | dbt run --select syntax — +, @, tag:, path:, state:modified+, hops |

---

## Databricks Deck — 25 Cards

**File:** `public/cards/databricks-cards.json`
**Individual cards:** `databricks-001.json` through `databricks-025.json`
**Category label:** `Databricks`
**Color:** `#E10B00`

### Topics Covered

| Card | Topic |
|------|-------|
| databricks-001 | Delta Lake ACID transactions — transaction log, optimistic concurrency |
| databricks-002 | Time travel — VERSION AS OF, TIMESTAMP AS OF, RESTORE |
| databricks-003 | OPTIMIZE — file compaction, when to run, Auto Optimize note |
| databricks-004 | VACUUM — retention risk, default 7 days, gotcha on RETAIN 0 HOURS |
| databricks-005 | Z-ordering — multi-dimensional data skipping, when it helps vs partitions |
| databricks-006 | Delta Live Tables — declarative vs imperative, what DLT manages |
| databricks-007 | DLT streaming vs batch — readStream vs read, Triggered vs Continuous |
| databricks-008 | DLT expectations — expect vs expect_or_drop vs expect_or_fail |
| databricks-009 | Unity Catalog 3-level namespace — catalog.schema.table, Hive Metastore migration |
| databricks-010 | Unity Catalog governance — cross-workspace, column masking, audit logs, lineage |
| databricks-011 | Unity Catalog row-level security — row access policies, storage vs query-time |
| databricks-012 | Databricks Workflows vs Airflow — when each is right |
| databricks-013 | Databricks Workflows vs Dagster — mixed-platform orchestration |
| databricks-014 | MLflow experiment tracking — params, metrics, artifacts, autolog |
| databricks-015 | MLflow Model Registry and serving — stages, load by name, Model Serving |
| databricks-016 | readStream/writeStream — checkpoint requirement, unique checkpoint gotcha |
| databricks-017 | Trigger modes — processingTime, Once, AvailableNow, Continuous |
| databricks-018 | Watermarking — why required for stateful aggregations, unbounded state gotcha |
| databricks-019 | SQL warehouse types — Serverless vs Pro vs Classic, cold start trade-offs |
| databricks-020 | Photon engine — vectorized C++ engine, Python UDF gotcha |
| databricks-021 | Cluster types — all-purpose vs job compute vs SQL warehouse |
| databricks-022 | dbutils.fs — file system operations, not available outside Databricks |
| databricks-023 | dbutils.secrets and widgets — secret redaction gotcha, parameterized notebooks |
| databricks-024 | Auto Loader — cloudFiles format, schema evolution, schemaEvolutionMode gotcha |
| databricks-025 | Auto Loader file notification vs directory listing mode — when and why |

---

## Files Created

```
public/cards/dbt-adv-001.json through dbt-adv-025.json  (25 files)
public/cards/dbt-adv-cards.json                          (deck manifest, flat array)
public/cards/databricks-001.json through databricks-025.json  (25 files)
public/cards/databricks-cards.json                       (deck manifest, flat array)
```

**index.html updated:** Both deck manifests added to the `mergePackCards()` function's file list at lines 761-762.

---

## How to Verify in the App

1. Open the DE Flashcards app (deployed on Vercel or run locally with `cd public && npx serve .`)
2. Click "Load Card Packs" or trigger `mergePackCards()` from the browser console
3. Filter by category "dbt Advanced" or "Databricks" to see the new cards
4. Confirm 25 cards per deck are loaded

**Quick console check:**
```js
// In browser console on the app:
cards.filter(c => c.cat === 'dbt Advanced').length   // should be 25
cards.filter(c => c.cat === 'Databricks').length      // should be 25
```

---

## Quality Notes

- All answers are interview-ready with "gotcha/key differentiator" angle as specified
- No em dashes used (commas/colons throughout)
- Answers are 3-4 sentence max
- Topics directly relevant to Unchained Capital, HighlightTA, Alvys, Allata (all list dbt heavily)
- Deck format matches existing app convention (flat array of card objects, same as aws-cards.json)
