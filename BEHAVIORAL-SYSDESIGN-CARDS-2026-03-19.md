# Behavioral + System Design Flashcard Deck
**Created:** 2026-03-19  
**Author:** Kai (DE Coach subagent)

---

## Summary

40 flashcards created and deployed for DE behavioral and system design interview prep.

---

## Cards Created

### Part 1: Behavioral Cards (20 cards)
Files: `public/cards/behavioral-001.json` through `behavioral-020.json`

| ID | Topic |
|----|-------|
| behavioral-001 | Pipeline failure / incident response (Dagster + schema change) |
| behavioral-002 | Pipeline outage impacting stakeholders (Airflow + DST bug) |
| behavioral-003 | Cross-functional collaboration with non-technical stakeholders |
| behavioral-004 | Conflicting priorities with product team |
| behavioral-005 | Performance optimization: slow Snowflake query |
| behavioral-006 | Performance optimization: slow Spark pipeline (skew) |
| behavioral-007 | Disagreement with teammate (Debezium vs custom CDC) |
| behavioral-008 | Receiving critical feedback from manager |
| behavioral-009 | Dealing with ambiguous data requirements |
| behavioral-010 | Scaling a data system (Kafka/Flink at 50K events/sec) |
| behavioral-011 | Data quality incident (Great Expectations + null spike) |
| behavioral-012 | Learning a new tool quickly (Flink in 2 weeks) |
| behavioral-013 | Delivering under tight deadline (revenue attribution) |
| behavioral-014 | Improving team data practices (dbt testing standards) |
| behavioral-015 | Debugging a mysterious bug (intermittent Dagster duplicates) |
| behavioral-016 | Communicating findings to non-engineers (cohort analysis to execs) |
| behavioral-017 | Mentorship and knowledge sharing |
| behavioral-018 | Prioritizing competing deadlines |
| behavioral-019 | Learning from a failure (Friday dbt deploy incident) |
| behavioral-020 | Proactively identifying a risk before it became a problem |

### Part 2: System Design Cards (20 cards)
Files: `public/cards/sysdesign-de-001.json` through `sysdesign-de-020.json`

| ID | Topic |
|----|-------|
| sysdesign-de-001 | Batch ETL: PostgreSQL OLTP to Snowflake DWH |
| sysdesign-de-002 | Real-time streaming: Kafka to analytics (Flink + Iceberg) |
| sysdesign-de-003 | Data quality monitoring system |
| sysdesign-de-004 | Medallion architecture (Bronze/Silver/Gold data lake) |
| sysdesign-de-005 | CDC pipeline with Debezium + Kafka |
| sysdesign-de-006 | Metrics/analytics platform at scale (500+ users) |
| sysdesign-de-007 | ML feature store (Feast/Tecton, offline/online split) |
| sysdesign-de-008 | Data catalog and lineage system (DataHub + OpenLineage) |
| sysdesign-de-009 | Multi-tenant data warehouse |
| sysdesign-de-010 | Late-arriving data in streaming (watermarks + reprocessing) |
| sysdesign-de-011 | Cost-efficient log aggregation (1TB/day) |
| sysdesign-de-012 | Financial data pipeline (ACID + auditability) |
| sysdesign-de-013 | Batch vs streaming decision framework |
| sysdesign-de-014 | Reporting system for 10M DAU |
| sysdesign-de-015 | Schema evolution without breaking downstream consumers |
| sysdesign-de-016 | Data mesh vs centralized warehouse |
| sysdesign-de-017 | Event-driven data architecture |
| sysdesign-de-018 | Partition strategy for large fact tables (5B rows) |
| sysdesign-de-019 | Fan-out event pattern (one event, many consumers) |
| sysdesign-de-020 | Reproducible ML training data pipeline |

---

## Files Modified

- **Created:** 40 individual card JSON files
- **Created:** `public/cards/behavioral-sysdesign-cards.json` (manifest with all 40 cards inline)
- **Edited:** `public/index.html` (added `'cards/behavioral-sysdesign-cards.json'` to mergePackCards array after kubernetes line)

---

## Deploy

- **Git commit:** `feat: add behavioral + system design DE interview flashcards (40 cards)` (3072992)
- **Pushed to:** github.com/youvereachedhenryjones/de-flashcards main
- **Vercel production URL:** https://de-flashcards-rho.vercel.app
- **Deploy inspect:** https://vercel.com/henry-jones-projects-29c1c47e/de-flashcards/B8mVh6HogXbHrUm8qFkaLQgtHnXP

---

## Quality Notes

- No em dashes used anywhere
- Real tools named throughout: dbt, Dagster, Airflow, Spark, Kafka, Flink, Snowflake, Fivetran, Debezium, Iceberg, Great Expectations, DataHub, Feast
- Behavioral answers guide a complete STAR story with concrete DE talking points
- System design answers include components, key decisions, scale considerations, and gotchas
- Every answer ends with "What interviewers look for" to orient Ryan's prep
