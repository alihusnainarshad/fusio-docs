import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Custom API Logic',
        emoji: '🔄',
        description: (
            <>
                Build custom backend logic with reusable actions
            </>
        ),
    },
    {
        title: 'Microservice API Gateway',
        emoji: '🧠',
        description: (
            <>
                Secure, route, and orchestrate traffic between microservices
            </>
        ),
    },
    {
        title: 'API Developer Portal',
        emoji: '🕸️',
        description: (
            <>
                Provide API docs, testing tools, and SDK downloads
            </>
        ),
    },
    {
        title: 'API Monetization',
        emoji: '🌐',
        description: (
            <>
                Manage plans, quotas, rate limits, and access control
            </>
        ),
    },
    {
        title: 'AI / MCP Integration',
        emoji: '💸',
        description: (
            <>
                Expose and control APIs for AI tools and agents
            </>
        ),
    },
    {
        title: 'API Analytics & Monitoring',
        emoji: '⚡',
        description: (
            <>
                Track API usage, performance, and errors
            </>
        ),
    },
    {
        title: 'AI-Assisted API Development',
        emoji: '📊',
        description: (
            <>
                Generate custom backend logic using AI and natural language
            </>
        ),
    },
    {
        title: 'SDK Automation',
        emoji: '📰',
        description: (
            <>
                Automatically generate client SDKs for your APIs
            </>
        ),
    },
    {
        title: 'Database API Gateway',
        emoji: '📡',
        description: (
            <>
                Expose legacy databases as REST APIs
            </>
        ),
    },
];

function Feature({emoji, title, description}) {
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

export default function HomepageFeatures() {
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
