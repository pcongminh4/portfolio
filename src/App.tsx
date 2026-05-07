import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { projects, skills } from './data/portfolio';
import type { Project } from './data/portfolio';

const BASE = '/portfolio';

function stripBase(pathname: string) {
  return pathname.replace(BASE, '') || '/';
}

function getSlugFromPath(pathname: string) {
  const clean = stripBase(pathname);
  const m = clean.match(/^\/projects\/([^\/]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

export default function App() {
  const [path, setPath] = useState<string>(
    stripBase(window.location.pathname)
  );

  useEffect(() => {
    const onPop = () => {
      setPath(stripBase(window.location.pathname));
    };

    window.addEventListener('popstate', onPop);

    return () => window.removeEventListener('popstate', onPop);
  }, []);

  function navigateTo(to: string) {
    const fullPath = `${BASE}${to}`;

    if (fullPath === window.location.pathname) return;

    window.history.pushState({}, '', fullPath);

    setPath(to);
  }

  function handleOpenProject(project: Project) {
    navigateTo(`/projects/${encodeURIComponent(project.slug)}`);
  }

  if (path === '/' || path === '/index.html') {
    return (
      <HomePage
        projects={projects}
        skills={skills}
        onOpenProject={handleOpenProject}
      />
    );
  }

  if (path.startsWith('/projects/')) {
    const slug = getSlugFromPath(window.location.pathname);

    const project = slug
      ? projects.find((p) => p.slug === slug)
      : undefined;

    if (!project) {
      navigateTo('/');
      return null;
    }

    return (
      <ProjectDetailPage
        project={project}
        onBack={() => navigateTo('/')}
      />
    );
  }

  return (
    <HomePage
      projects={projects}
      skills={skills}
      onOpenProject={handleOpenProject}
    />
  );
}