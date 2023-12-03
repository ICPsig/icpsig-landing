import alexImage from "../assets/alex.svg";
import markImage from "../assets/mark.svg"

import transactionsImage from "../assets/dashboard.png"
import addressBookImage from "../assets/dashboard.png"
import notificationImage from "../assets/dashboard.png"

import transactionsIcon from "../assets/transactions-icon.svg"
import addressbookIcon from "../assets/addressbook-icon.svg"
import notificationsIcon from "../assets/notifications-icon.svg"

export const reviewCardData = [
]

export const sampleCardData = [
    {
        id: 1,
        title: 'TRANSACTIONS',
        titleIcon: transactionsIcon,
        description: 'Simplifying transaction set-up and execution',
        subDescription: 'Creating on-chain transactions with ICPsig is as easy as 1,2,3!',
        imageURL: transactionsImage,
        subPoints: [
            `Understand the inputs to even the most complex transactions`,
            `Simulate the outcome of the transaction before signing`,
            `Track the on-chain confirmation on ICPsig`,
        ]
    },
    {
        id: 2,
        title: 'ADDRESS BOOK',
        titleIcon: addressbookIcon,
        description: 'Manage multiple addresses with ease',
        subDescription: 'Know thy friends and contracts',
        imageURL: addressBookImage,
        subPoints: [
            `Manage permissions to different addresses`,
            `Token and access tagging for all addresses`,
            `Have visibility on counter-party address for every transaction`,
        ]
    },
    {
        id: 3,
        title: 'NOTIFICATIONS',
        titleIcon: notificationsIcon,
        description: 'Sign multisig transactions, asynchronously',
        subDescription: 'No more manual reminder DMs to transaction signers(Coming soon)',
        imageURL: notificationImage,
        subPoints: [
            `Our bots send recurring notifications to pending signers`,
            `User stats dashboard shows signer behaviour over multiple transactions`,
            `Get confirmation notification once the transaction is on-chain`
        ]
    }
]

export const upcomingFeaturesData = [
    {
        id: 1,
        achieved: true,
        timeline: 'March 2024',
        title: 'Transaction Notes',
        description: `Add notes and short descriptions to every transaction you create.`
    },
    {
        id: 2,
        achieved: false,
        timeline: 'April 2024',
        title: 'Mini Apps',
        description: `Governance dApp coming soon. Have anything else in mind? Lets discuss your idea..`
    },
    {
        id: 3,
        achieved: false,
        timeline: 'May 2024',
        title: 'Transaction Tags',
        description: `Helps you organize and understand the transactions across wallets.`
    }
]

// major links across landing
export const goToAppURL = 'https://wrv7o-yaaaa-aaaag-aceqa-cai.raw.icp0.io/';

export const docsURL = ''

export const blogURL = ''

export const buildWithUsMailURL = 'mailto:contact@premiurly.in'

export const discussURL = 'mailto:contact@premiurly.in'

export const letUsKnowURL = ''

export const roadmapURL = ''


interface IsectionItems {
    title: string;
    url: string;
    linkIcon: boolean;
    icon?: boolean;
}

interface IfooterData {
    sectionHeader: string;
    sectionItems: IsectionItems[];
}

// footer section data
export const footerData: IfooterData[] = [
    {
        sectionHeader: 'ICPsig',
        sectionItems: [
            {
                title: 'Go to App',
                url: `${goToAppURL}`,
                linkIcon: true,
            },
            {
                title: 'Report an Issue',
                url: `mailto:contact@premiurly.in`,
                linkIcon: true,
            }
        ]
    },
    {
        sectionHeader: 'Support',
        sectionItems: [
            {
                title: 'Contact Us',
                url: `mailto:contact@premiurly.in`,
                linkIcon: true,
            }
        ]
    },
]