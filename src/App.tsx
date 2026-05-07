import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { projects, skills } from './data/portfolio';
import type { Project } from './data/portfolio';

function getSlugFromPath(pathname: string) {
  const m = pathname.match(/^\/projects\/([^\/]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

export default function App() {
  const [path, setPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  function navigateTo(to: string) {
    if (to === window.location.pathname) return;
    window.history.pushState({}, '', to);
    setPath(to);
  }

  function handleOpenProject(project: Project) {
    navigateTo(`/projects/${encodeURIComponent(project.slug)}`);
  }

  // Home
  if (path === '/' || path === '' || path === '/index.html') {
    return <HomePage projects={projects} skills={skills} onOpenProject={handleOpenProject} />;
  }

  // Project detail route: /projects/:slug
  if (path.startsWith('/projects/')) {
    const slug = getSlugFromPath(path);
    const project = slug ? projects.find((p) => p.slug === slug) : undefined;
    if (!project) {
      // Not found -> go home
      navigateTo('/');
      return null;
    }
    return <ProjectDetailPage project={project} onBack={() => navigateTo('/')} />;
  }

  // Fallback -> home
  return <HomePage projects={projects} skills={skills} onOpenProject={handleOpenProject} />;
}