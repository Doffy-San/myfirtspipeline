# Projet Next.js avec Pipeline CI/CD

## Description
Ceci est une application simple développée avec Next.js pour démontrer une pipeline CI/CD complète en utilisant des outils modernes. L'application affiche une liste des outils utilisés dans la pipeline ainsi que leurs utilités. Le projet est configuré avec des pipelines automatisés pour la construction, les tests, l'analyse de code, et le déploiement.

## Fonctionnalités
- Application Next.js simple avec une page d'accueil listant les outils CI/CD.
- Pipeline CI/CD automatisée configurée sur GitLab.
- Workflow multi-branches pour simuler une collaboration en entreprise.

## Outils Utilisés
Voici les outils intégrés dans le projet :

### CI/CD
- **GitLab CI/CD** : Automatisation des étapes de la pipeline, y compris la construction, les tests et le déploiement.
- **GitHub Actions** : Alternative pour démontrer une autre approche CI/CD.

### Développement
- **Next.js** : Framework React pour développer l'application web.
- **ESLint** : Outil d'analyse de code pour garantir la qualité du code.

### Tests
- **Jest** : Framework pour les tests unitaires.

### Documentation
- **Storybook** : Outil pour documenter et tester les composants UI.

### Performance et Sécurité
- **Lighthouse CI** : Vérifie les standards de performance et d'accessibilité.
- **Snyk** : Analyse et sécurise les dépendances.

### Conteneurs
- **Docker** : Assure la cohérence entre les environnements.

## Workflow des Branches
- **`develop`** : Utilisée pour les tests et la validation des modifications.
- **`main`** : Utilisée pour le code prêt pour la production. La pipeline de `main` dépend du succès de celle de `develop`.

## Étapes de la Pipeline
1. **Build** : Compile l'application Next.js.
2. **Test** : Exécute les tests Jest pour garantir la qualité du code.
3. **Lint** : Analyse le code avec ESLint pour détecter les erreurs.
4. **Measure** : Évalue la performance avec Lighthouse CI.
5. **Secure** : Analyse les dépendances avec Snyk.
6. **Deploy** : Déploie l'application sur Vercel (ou un autre hébergeur).

