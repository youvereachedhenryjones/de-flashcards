# AWS Data Services Flashcards - Creation Summary
**Date:** 2026-03-19
**Agent:** Kai (DE Coach subagent)
**Total cards created:** 32 individual JSON files + 1 deck file (aws-cards.json)

---

## Files Created

### Individual card files (aws-001.json through aws-032.json)
Location: `/Users/clawdbot/.openclaw/workspace/projects/de-flashcards/public/cards/`

### Deck file for app loading
`aws-cards.json` - array of all 32 cards, registered in index.html

---

## Cards by Topic

### Storage & Data Lake (8 cards)
| ID | Question | Difficulty |
|----|----------|------------|
| aws-001 | S3 partitioning strategies and Athena cost impact | intermediate |
| aws-002 | S3 consistency model (post-2020 strong consistency) | intermediate |
| aws-003 | S3 Select vs Athena - when to use which | intermediate |
| aws-004 | Lake Formation vs S3 bucket policies for data access | intermediate |
| aws-005 | Lake Formation blueprints and governed tables | advanced |
| aws-006 | LF-TBAC (tag-based access control) at scale | advanced |
| aws-007 | S3 small files problem and how to fix it | intermediate |
| aws-008 | Storage class selection per data lake zone | intermediate |

### Query & Analytics (8 cards)
| ID | Question | Difficulty |
|----|----------|------------|
| aws-009 | Athena workgroups and cost controls | intermediate |
| aws-010 | Athena CTAS - CREATE TABLE AS SELECT | intermediate |
| aws-011 | Athena federated queries | advanced |
| aws-012 | Redshift vs Athena vs EMR - when to use each | intermediate |
| aws-013 | Redshift DISTKEY and choosing the right distribution key | intermediate |
| aws-014 | Redshift Spectrum - when better than full Redshift | intermediate |
| aws-031 | Glue Data Catalog vs self-managed Hive Metastore | intermediate |
| (cloud-aws-de covers: COPY command, sort keys, Spectrum deep dive) | | |

### Streaming (6 cards)
| ID | Question | Difficulty |
|----|----------|------------|
| aws-015 | Kinesis shards - throughput and ordering guarantees | intermediate |
| aws-016 | Kinesis retention and what happens when consumers fall behind | intermediate |
| aws-017 | Kinesis Firehose buffering model | intermediate |
| aws-018 | Kinesis vs MSK/Kafka trade-offs | intermediate |
| aws-019 | MSK basics - what AWS manages vs you manage | intermediate |
| aws-020 | Hot shards in Kinesis - causes and fixes | intermediate |

### Compute & Orchestration (7 cards)
| ID | Question | Difficulty |
|----|----------|------------|
| aws-021 | EMR cluster types - transient vs long-running | intermediate |
| aws-022 | EMR instance groups vs instance fleets | advanced |
| aws-023 | EMR auto-scaling - Managed Scaling vs Custom | advanced |
| aws-024 | Step Functions for data pipelines - Task states, Retry, Catch | intermediate |
| aws-025 | Step Functions Map state for parallel pipeline fan-out | intermediate |
| aws-026 | Lambda limits for DE - timeouts, memory, workarounds | intermediate |
| aws-027 | Lambda event sources for DE pipelines | intermediate |
| aws-032 | EMR Serverless vs EMR on EC2 | intermediate |

### Governance & Catalog (3 cards)
| ID | Question | Difficulty |
|----|----------|------------|
| aws-028 | Glue Data Catalog - Hive-compatible metadata hub | beginner |
| aws-029 | Glue Crawlers - partition discovery and limitations | intermediate |
| aws-030 | IAM vs Lake Formation permissions - intersection model | intermediate |

---

## Quality Notes
- All answers: 2-3 sentences max with KEY insight
- Each card includes 1 differentiator (the "key differentiator:" callout)
- No em dashes used (replaced with " - " or ": ")
- Questions written as DE interview questions, not textbook headers
- Covers companies Ryan is targeting: Unchained Capital, Alvys (AWS/Azure), Allata (AWS+Terraform)

## App Integration
- `aws-cards.json` deck file added to index.html card loading list
- Will appear as "AWS Data Services" category in the flashcard app
- 32 cards complement the existing 25 cards in `cloud-aws-de-cards.json` (57 total AWS cards)

## Note on Format Discrepancy
The task brief referenced `dbt-001.json` individual files, but the actual project uses deck array files (e.g., `dbt-cards.json`). Both formats were created: individual `aws-001.json` through `aws-032.json` files as requested, plus `aws-cards.json` deck file for app compatibility.
