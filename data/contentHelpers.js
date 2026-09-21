const DEFAULT_TYPE = "web-project";
const DEFAULT_CONTENT_KIND = "portfolio-project";
const DEFAULT_STATUS = "completed";
const DEFAULT_VISIBILITY = "public";
const DEFAULT_TITLE = "Proyecto sin título";
const DEFAULT_SCHEMA_TYPE = "CreativeWork";

const isPlainObject = (value) =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

const toArray = (value) => {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  return value ? [value] : [];
};

const normalizeLegacySection = (key, value) => {
  if (!value) {
    return null;
  }

  if (isPlainObject(value)) {
    return {
      id: value.id || key,
      type: value.type || key,
      title: value.title || key,
      content: value.content || value.items || value.text || value,
      raw: value,
    };
  }

  return {
    id: key,
    type: key,
    title: key,
    content: value,
    raw: value,
  };
};

const normalizeSection = (section, index) => {
  if (!section) {
    return null;
  }

  if (isPlainObject(section)) {
    const fallbackId = `section-${index + 1}`;

    return {
      id: section.id || section.type || fallbackId,
      type: section.type || "custom",
      title: section.title || "",
      content: section.content || section.items || section.text || "",
      raw: section,
    };
  }

  return {
    id: `section-${index + 1}`,
    type: "text",
    title: "",
    content: section,
    raw: section,
  };
};

const normalizeLink = (link, index) => {
  if (!link) {
    return null;
  }

  if (typeof link === "string") {
    return {
      id: `link-${index + 1}`,
      label: link,
      url: link,
      type: "external",
      raw: link,
    };
  }

  if (isPlainObject(link)) {
    const url = link.url || link.href || "";

    if (!url) {
      return null;
    }

    return {
      id: link.id || link.type || `link-${index + 1}`,
      label: link.label || link.title || link.type || url,
      url,
      type: link.type || "external",
      raw: link,
    };
  }

  return null;
};

const getMediaFromProject = (project = {}) => ({
  icon: project.icon || "",
  image: project.image || project.icon || "",
  detailImage: project.detailImage || "",
  contentImage: project.contentImage || "",
  extraImage: project.extraImage || "",
  gallery: Array.isArray(project.gallery) ? project.gallery : [],
  ogImage: project.ogImage || project.image || project.icon || "",
});

const getLinksFromProject = (project = {}) => {
  const links = toArray(project.links).map(normalizeLink).filter(Boolean);

  // Compatibilidad con campos antiguos usados por las fichas actuales.
  if (project.githubUrl) {
    links.push({
      id: "github",
      label: "GitHub",
      url: project.githubUrl,
      type: "github",
      raw: project.githubUrl,
    });
  }

  if (project.liveUrl) {
    links.push({
      id: "live",
      label: "Sitio en vivo",
      url: project.liveUrl,
      type: "live",
      raw: project.liveUrl,
    });
  }

  return links;
};

const getSectionsFromProject = (project = {}) => {
  if (Array.isArray(project.sections)) {
    return project.sections.map(normalizeSection).filter(Boolean);
  }

  // Campos narrativos antiguos que hoy viven directamente en cada proyecto.
  return [
    ["challenges", project.challenges],
    ["features", project.features],
    ["process", project.process],
    ["results", project.results],
    ["learnings", project.learnings],
    ["notes", project.notes],
  ]
    .map(([key, value]) => normalizeLegacySection(key, value))
    .filter(Boolean);
};

const getSeoFromProject = (project = {}, normalized = {}) => {
  const title = normalized.title || project.title || project.id || DEFAULT_TITLE;
  const description =
    normalized.summary || project.summary || project.description || "";
  const media = normalized.media || getMediaFromProject(project);
  const seo = isPlainObject(project.seo) ? project.seo : {};

  return {
    title: seo.title || title,
    description: seo.description || description,
    image: seo.image || media.ogImage || media.image || "",
    schemaType: seo.schemaType || DEFAULT_SCHEMA_TYPE,
    keywords: toArray(seo.keywords || project.keywords || normalized.tags),
  };
};

export const normalizeProject = (project = {}) => {
  const source = isPlainObject(project) ? project : {};
  const categories = Array.isArray(source.categories)
    ? source.categories.filter(Boolean)
    : toArray(source.category);
  const tags = Array.isArray(source.tags)
    ? source.tags.filter(Boolean)
    : toArray(source.technologies);
  const tools = Array.isArray(source.tools)
    ? source.tools.filter(Boolean)
    : toArray(source.technologies);
  const media = isPlainObject(source.media)
    ? { ...getMediaFromProject(source), ...source.media }
    : getMediaFromProject(source);
  const links = getLinksFromProject(source);
  const sections = getSectionsFromProject(source);
  const normalized = {
    id: source.id,
    slug: source.slug || source.id,
    type: source.type || DEFAULT_TYPE,
    contentKind: source.contentKind || DEFAULT_CONTENT_KIND,
    title: source.title || source.id || DEFAULT_TITLE,
    summary: source.summary || source.description || "",
    description: source.description || "",
    status: source.status || DEFAULT_STATUS,
    featured: Boolean(source.featured),
    visibility: source.visibility || DEFAULT_VISIBILITY,
    year: source.year || "",
    semester: source.semester || "",
    course: source.course || "",
    grade: source.grade || "",
    categories,
    tags,
    tools,
    media,
    links,
    downloads: toArray(source.downloads),
    sections,
    raw: source,
  };

  return {
    ...normalized,
    seo: getSeoFromProject(source, normalized),
  };
};

export const normalizeProjects = (projects) => {
  if (!Array.isArray(projects)) {
    return [];
  }

  return projects.map(normalizeProject);
};

export const getProjectByIdOrSlug = (projects, value) => {
  if (!Array.isArray(projects) || !value) {
    return null;
  }

  return (
    projects.find((project) => {
      const normalized = normalizeProject(project);

      return normalized.id === value || normalized.slug === value;
    }) || null
  );
};

export const getProjectCardData = (project) => {
  const normalized = normalizeProject(project);
  const [categoryLabel = ""] = normalized.categories;

  return {
    id: normalized.id,
    slug: normalized.slug,
    title: normalized.title,
    summary: normalized.summary,
    categoryLabel,
    categories: normalized.categories,
    coverImage:
      normalized.media.image || normalized.media.icon || normalized.media.detailImage || "",
    coverAlt: normalized.title,
    status: normalized.status,
    type: normalized.type,
    raw: normalized.raw,
  };
};

export const getProjectSections = (project) => normalizeProject(project).sections;

export const getProjectLinks = (project) => normalizeProject(project).links;

export const getProjectSeo = (project) => normalizeProject(project).seo;
