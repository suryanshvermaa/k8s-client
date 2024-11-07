export const deploymentManifest={
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
      name: 'nodejs',
      labels: {
        app: 'nodejs',
      },
    },
    spec: {
      replicas: 3,
      selector: {
        matchLabels: {
          app: 'nodejs',
        },
      },
      template: {
        metadata: {
          labels: {
            app: 'nodejs',
          },
        },
        spec: {
          containers: [
            {
              name: 'node-container',
              image: 'suryanshverma/my-node-js-backend-app:latest',
              ports: [
                {
                  containerPort: 8080,
                },
              ],
            },
          ],
        },
      },
    },
}