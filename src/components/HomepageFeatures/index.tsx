import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Unified API Gateway',
    emoji: '📡',
    description: (
      <>
          Connect databases, microservices, or custom scripts into a standardized REST/GraphQL API. Fusio handles the infrastructure routing, authentication, and request validation so you can focus on core execution logic.
      </>
    ),
  },
  {
    title: 'Schema-Driven Automation',
    emoji: '🧠',
    description: (
      <>
          Define your data models once using TypeSchema. Fusio uses this metadata to enforce strict validation and automatically generate OpenAPI specifications and multi-language client SDKs.
      </>
    ),
  },
  {
    title: 'Lifecycle Management',
    emoji: '⚡',
    description: (
      <>
          Manage the entire API ecosystem with a built-in developer portal, granular rate limiting, and a native monetization layer to handle subscriptions and billing directly at the gateway.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
      </div>
      <div className={styles.featureHeading}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
