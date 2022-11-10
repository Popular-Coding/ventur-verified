> **Warning**  
> This Project is a Work in Progress and not in a state that would be suitable for a Production deployment without significant updates.

# ![Ventur Verified](media/ventur-verified-cover.webp)

# Ventur Verified
Ventur Verified is a credentialing decentralized application (dApp) built on top of the [Ventur Network](https://github.com/Popular-Coding/ventur).

## Overview
Ventur Verified is a credentialing dApp that allows you to create, assign, accept, and manage non-transferable credentials.  

Built on top of Ventur’s Non-Transferable NFTs (NT-NFTs), Ventur Verified allows for the managment of credentials in the Polkadot Ecosystem, enabling automated credential verification for job applications, rfp proposals, content access, and more.


### Problem Statement
Blockchains and the Web3 space introduce a new, "trustless" paradigm, where interactions no longer need to rely on trust between two parties; instead, all contracts are verified, which means an individual's transactions, credentials, and identity are recorded on a practically tamper-proof chain. 

Thanks to this trustless paradigm, we can easily verify an individual's actions in the blockchain ecosystem. It becomes near-impossible to present fabricated information about an individual's history, as everything is recorded and verified on the chain. 

However, for an end-user, be it a business or a consumer, checking records on the blockchain is not always a viable option. That would require resources or access not available to all. This gives rise to the need for an easily-accessible application that would present this verified data in a human-readable format. 


### Ventur Verified as a Solution
Ventur Verified capitalizes on Ventur's NT-NFTs by introducing them as certifications. Any certification authority can create their own collection of NT-NFTs and assign individual tokens to accounts depending on their criteria. 

NT-NFT certifications can be asigned based on on-chain interactions. This could mean certifying addresses that have been able to keep a Polkadot Validator running successfully without downtime or slashes for a year. 

A company might also present certifications for off-chain accomplishments, such as certification exams or courses.

Regardless of the reasoning behind their assignment and acceptance, NT-NFTs behave similarly to traditional NFTs, aside from the fact that they are non-transferable. An NT-NFT assigned to an account cannot be re-assigned to another account, which gives you the certainty that if an individual presents a certification, they earned it; its presence on their chain cannot be fabricated, and no one other than the certification authority could have passed it on to them. You can rest easy knowing someone cannot falsify their resume. 

Aside from the peace of mind Ventur's NT-NFTs provide, Ventur Verified also offers the ease of use for all parties involved:

- A certification authority can create and maintain certifications with a few clicks of a button.
- An individual can reliably present their certifications on their easy-to-digest personal page. 
- A business can view individuals' pages, easily identifying whether a user's certifications meet their desired qualifications for a contract. 

With Ventur Verified, we aim to streamline the process of making reliable connections to set up contracts, because at Ventur, we mean business.  

### User Interface

#### User Flows
![User Flow](media/ventur-verified-flow.jpg)
#### UI Design
##### User Profile
![User Profile](media/ui/profile.png)
##### Badge Details
![Badge Details](media/ui/badge.png)
##### Badge Creation and Management
###### Manage
![Manage View](media/ui/manage.png)
###### Create
![Create View](media/ui/create.png)
### Technical Documentation

#### Architecture
![Architecture](media/ventur-verified-dapp.jpg)
### Next Steps
- Refine UI Iteratively with User Testing
- Launch dApp on Ventur Testnet
- Enable Cross Chain Credentialing using [XCM](https://polkadot.network/cross-chain-communication/)
- Engage Strategic Partners
- Develop and Release Paired Offering - Ventur Subscribed - Subscriptions based off of the NT-NFT solution that underpins Ventur Verified


## Running Ventur Verified

### Prerequisites

In order to run the Ventur Verified dApp, you will need to install Node and Yarn.

You will also need to clone the Ventur repository and run a node locally, as Ventur Verified will look for a local Ventur node to connect to.

### Setup

```bash
yarn install
```

### Usage

You can start the template in development mode to connect to a locally running node

```bash
yarn start
```

You can also build the app in production mode,

```bash
yarn build
```

and open `build/index.html` in your favorite browser.

### Related Work

* [`Ventur Network`](https://github.com/Popular-Coding/ventur)

License: GPLv3
