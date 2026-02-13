---
title: Zotero
date: 2026-02-06
category:
tags: 
article: true
---
# Zotero
## 重命名

```plain
{{ year suffix="_" }}{{ if {{ itemType == "patent" }} }}{{ issuingAuthority suffix="_" }}{{ else }}{{ if {{ itemType == "thesis" }} }}{{ thesisType suffix="" }}{{ itemType suffix="_" localize="true" }}{{ else }}{{ itemType suffix="_" localize="true" }}{{ endif }}{{ endif }}{{ title truncate="80" suffix="_" }}{{ authors max="3" name="family" join="," }}
```