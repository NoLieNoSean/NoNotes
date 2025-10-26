module.exports = async (tp) => {
  const id = await tp.system.prompt("Enter note ID");
  const files = app.vault.getMarkdownFiles();

  // Find the note with matching frontmatter id
  const file = files.find(f => app.metadataCache.getFileCache(f)?.frontmatter?.id === id);

  if (!file) {
    new Notice(`No note found with id: ${id}`);
    return '';
  }

  const title = file.basename;

  // Return a link and place the cursor right after the note name
  return `${title}`;
};