# Birds of Bengaluru — 200-Species Field Course

A browser-based, GitHub Pages-friendly field course for learning Bengaluru birds by appearance, habitat and sound.

## Included
- **200 species** with common name, scientific name, family and Bengaluru-relevant habitat category.
- Search and family/habitat filters.
- Identification clues for key beginner species and a general comparison workflow for the expanded list.
- **Live Wikimedia Commons photography** selected in the browser using the common + scientific name.
- **Xeno-canto recording links** for species sound identification.
- **Macaulay Library/eBird media search** links for additional photos, audio and regional examples.
- No API key or backend is required for the course itself.

## Accuracy and media policy
The species pool was assembled from Bengaluru regional bird checklists and cross-checked against current bird-media/taxonomy resources. Bengaluru occurrence is not the same as year-round abundance: several species in the course are seasonal migrants or localized birds.

The repository deliberately **does not redistribute third-party photographs or recordings**. Images are fetched from Wikimedia Commons at runtime and audio is opened through Xeno-canto/Macaulay Library so that the learner can see the original attribution/licence and recording metadata.

For a difficult identification, do not rely on one field mark. Compare:
1. silhouette and size,
2. bill/leg shape,
3. plumage pattern,
4. behaviour and habitat,
5. call/song,
6. season and locality,
7. multiple independent media examples.

## Sources
- IISc Centre for Ecological Sciences — Birds of Bangalore / historical Bengaluru checklist.
- Bangalore Birding Adventures — regional bird species checklist.
- eBird / Macaulay Library — photographs and sound recordings.
- Wikimedia Commons — openly licensed media repository.
- Xeno-canto — bird sound recording archive.

## GitHub Pages
Enable **Settings → Pages → Deploy from branch → main / root**. The course is a static site and needs no server.

## Important limitation
The current version provides live, source-linked media rather than storing 200+ copyrighted/third-party media files in Git. That is intentional: it avoids silently redistributing recordings/photos without confirming each item's licence and attribution. The media buttons are part of every species card.