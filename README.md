# Azure Cloud Resume Challenge

Hello, 

I'm delighted to take part in the Azure Cloud Resume Challenge.
This is a portion of the [A Cloud Guru Challenge](https://acloudguru.com/blog/engineering/cloudguruchallenge-your-resume-in-azure).

➡️[Here Is My GO At It.](https://www.yahya-abulhaj.dev/) 

## Introduction

Challenges:

- [x] Create a GitHub repo.
- [x] Use HTML and CSS to build the website and store the code in the repo.
- [x] Add a visitor count to the website using Azure Functions, Azure Cosmos DB.
- [x] Deploy the website to Azure Blob Storage.
- [ ] Enable HTTPS and custom domain support using Azure Content Delivery Network.
- [x] Unit Testing using DOTNET 6
- [x] Pipeline Configuration and Set up GitHub Actions 

## Progress
I was able to complete all of the challenges except for the CDN part under Azure Storage since the "Azure for Students" subscription does not support it.

## Thoughts..
I'd been thinking about this project for a while. I was so moved by [The Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/azure/) and the cool technologies used in tandem. Additionally, I'm an Azure fanboy so I thought it best to give it a shot prior to my excursion into aws!


<br>


# Helpful Resources!
### Storage Account

- Tutorial: [Host a static website on Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)

### Enable HTTPS and custom domain

- Quickstart: [Create an Azure CDN profile and endpoint](https://docs.microsoft.com/en-us/azure/cdn/cdn-create-new-endpoint)
- Tutorial: [Map a custom domain with HTTPS enabled](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name?tabs=azure-portal#map-a-custom-domain-with-https-enabled)

### Set up GitHub Action

- Tutorial: [Use GitHub Actions to deploy your static website to Azure storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions)
- This workflow is compromised of 4 tasks:
  - [Checkout](https://github.com/actions/checkout): this will checkout our code, so the workflow can access it.
  - [Azure Login](https://github.com/marketplace/actions/azure-login): this will perform a login to Azure, so we can run commands. This is the `az login` command.
  - [Azure CLI](https://github.com/marketplace/actions/azure-cli-action): this allows us to automate our workflow by executing Azure CLI commands. We'll use this task twice; first to upload our content to the blob storage and after that to purge the CDN endpoint.
- I encountered an issue with the **Purge CDN endpoint** task.
- This is the command to run to purge the CDN endpoint: 
`az cdn endpoint purge --content-paths  "/*" --profile-name "CDN_PROFILE_NAME" --name "CDN_ENDPOINT" --resource-group "RESOURCE_GROUP"`
- The `--profile name` argument is the actual name of the CDN profile resource.
- The `--name` argument is the name of the endpoint, as it appears in the hostname *mywebsite.azureedge.net*.
- When you add an endpoint to your CDN profile, a new resource is created with a long name. This is not the name we should use for our command.
