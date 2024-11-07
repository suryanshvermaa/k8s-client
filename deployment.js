import k8s from "@kubernetes/client-node";
import {deploymentManifest} from './deployment-manifest.js';

const kubeConfig=new k8s.KubeConfig();
kubeConfig.loadFromDefault();
const k8sClient=kubeConfig.makeApiClient(k8s.AppsV1Api);

async function createDeployment() {
    try {
        const response=await k8sClient.createNamespacedDeployment('default',deploymentManifest)
        console.log('deployment created',response.body.metadata);
    } catch (error) {
        console.log(error);
    }
}
async function deleteDeployment() {
    const response=await k8sClient.deleteNamespacedDeployment("nodejs",'default');
    console.log("deployment deleted");
}
deleteDeployment();