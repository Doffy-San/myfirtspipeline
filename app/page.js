import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const tools = [
    { name: "GitHub Actions", logo: "/github-actions.svg", link: "https://github.com/features/actions", utility: "CI/CD" },
    { name: "GitLab CI/CD", logo: "/gitlab-ci.svg", link: "https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/", utility: "CI/CD" },
    { name: "Docker", logo: "/docker.svg", link: "https://www.docker.com/", utility: "Containers" },
    { name: "ESLint", logo: "/eslint.svg", link: "https://eslint.org/", utility: "Linting" },
    { name: "Jest", logo: "/jest.svg", link: "https://jestjs.io/", utility: "Test" },
    { name: "Storybook", logo: "/storybook.svg", link: "https://storybook.js.org/", utility: "Documentation" },
    { name: "Lighthouse CI", logo: "/lighthouse-ci.svg", link: "https://github.com/GoogleChrome/lighthouse-ci", utility: "Measure" },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>Voici les outils utilisés pour cette première Pipeline :</p>
        
        <div className={styles.toolsList}>
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tool}
            >
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                width={50}
                height={50}
              />
              <span>{tool.name}</span>
              <span className={styles.toolUtility}>{tool.utility}</span>
            </a>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
