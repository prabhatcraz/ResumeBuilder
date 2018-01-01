var resumeData = {
    name: "Prabhat Ranjan",
    designation: "Software Development Engineer",
    imageUrl: "images/profile/prabhat.png",
    leftSection: [{
            title: "About Me",
            detail: " I have 6+ years of experience in Product Development in Amazon where I gained experience in building highly scalable distributed system. I also built front-end applications using HTML5 which were used in high volume events like <u>Black Friday</u>, <u>Prime Day sales</u> and <u>Diwali Dhamaka</u>. I love test-oriented development in Java and use Python and JavaScript as my side arms to build tools to ease operational overload."
        },
        {
            title: "SKILLS HIGHLIGHTS:",
            detail: "<b>Languages:</b> Java, Python, JavaScript, HTML5, Perl<br><b>FrameWorks/Technologies :</b> Guice, Junit, DynamoDB, ElasticSearch, S3, KMS, SQS, SNS, AWS StepFunctions, Flask, Android, JQuery, Backbone.js, Underscore.js, PhantomJS</div>"
        },
        {
            title: "EDUCATION:",
            detail: "B.E., Information Technology <i>(2006-10)</i><br/> Birla Institute of Technology, Mesra"
        },
        {
            title: "CONTACT ME:",
            detail: "<table><tr><td>Mobile</td><td>:</td><td>+31-633628685</td></tr><tr><td>Email</td><td>:</td><td><a href='mailto:prabhat.ranjan32@gmail.com' target='_top'>prabhat.ranjan32@gmail.com</a></td></tr><tr><td>Address</td><td>:</td><td>The Hague, Netherlands</td></tr></table>"
        },
        {
            title: "PERSONAL INFO:",
            detail: "<table><tr><td>Name</td><td>:</td><td>Prabhat Ranjan</td></tr><tr><td>Birthday</td><td>:</td><td>26-Aug-1987</td></tr><tr><td>Nationality</td><td>:</td><td>Indian</td></tr><tr><td>Born</td><td>:</td><td>Ranchi, India</td></tr><tr><td>Languages</td><td>:</td><td>English, Hindi</td></tr></table>"
        }
    ],
    rightSection: [{
        header: "EXPERIENCE",
        entities: [{
                companyName: "AWS WorkMail, The Hague, Netherlands",
                duration: "(Jan-2016 - till date)",
                details: [{
                        title: "Key Deliverables:",
                        items: [
                            "Part of <b>launching a new search service</b> to enable faster search on WorkMail Web-Application.",
                            "Tech lead for delivering <a href='https://aws.amazon.com/about-aws/whats-new/2016/10/amazon-workmail-now-supports-interoperability-with-microsoft-exchange-server/' target='_blank'>Interoperability</a> feature of WorkMail with Exchange servers over <a href='https://msdn.microsoft.com/en-us/library/office/dd877045(v=exchg.140).aspx' target='_blank'>EWS</a> protocol."
                        ]
                    },
                    {
                        title: "Details:",
                        items: [
                            "Designed and developed asynchronous <a href='https://en.wikipedia.org/wiki/Create,_read,_update_and_delete' target='_blank'>CRUD</a> APIs for high throughput system.",
                            "Designed generic data model to support <b>multi-tenency</b>.",
                            "Decoupled different components of the system through SQS and SNS.",
                            "Designed data model to efficiently ingest, search and delete data from <b>ElasticSearch</b>.",
                            "Refined data model to avoid hot-spots while interacting with DynamoDB.",
                            "Implemented asynchronous API to perform bulk deletion using <b>AWS StepFunctions.</b>",
                            "Involved in <b>test-driven development</b>, amounting to <b>~100% code coverage.</b>",
                            "Dealt with data-security via <b>customer controlled encryption</b> with KMS.",
                            "Wrote application for <b>load testing</b> to determine service bottlenecks, dependency behavior and scaling projections.",
                            "Helped in automating infrastructure setup using <b>CloudFormation</b>.",
                            "Enhanced <b>Operational Excellence</b> by writing tools to manage StepFunctions executions, backfill DynamoDB, etc.",
                            "Planned and executed complex backfilling of DynamoDB table in live system with zero downtime.",
                            "Involved in Security review by preparing Threat model and data flow diagrams."
                        ]
                    }
                ]
            },
            {
                companyName: "Amazon(Retail), Bangalore, India",
                duration: "(Feb-2013 - Jan 2016)",
                details: [{
                        title: "Key Deliverables:",
                        items: [
                            "Redesign of Mobile, Tablet and Desktop pages.",
                            "Development of multiple re-usable widgets to be used across amazon pages."
                        ]
                    },
                    {
                        title: "Details:",
                        items: [
                            "Developed a unified HTML5 framework to develop responsive, re-usable and internationalized widgets for Mobile, Tablet and Desktop pages.",
                            "Implemented and optimized <b>Infinite scroll</b> for Mobile and Tablet pages.",
                            "Introduced JavaScript Unit Testing to the team for the first time.",
                            "Hands-on with JavaScript libraries like <b>jQuery, Underscore, Backbone.</b>",
                            "Optimized JavaScript code to process high volume of items, enhancing page-render latency.",
                            "Enhanced framework design to <b>optimize Network Calls</b> resulting in better <a href='https://en.wikipedia.org/wiki/Above_the_fold' target='_blank'>Above-the-fold</a> latency.",
                            "Optimized Ajax payload to <b>increase backend cache-hit</b>.",
                            "Implemented instrumentation of widgets to gather user behavior data.",
                            "Took part in requirement discussion with Product Manager and UX Designer.",
                            "Lead project to make mobile pages usable in <b>hybrid mobile applications</b>."
                        ]
                    }
                ]
            },
            {
                companyName: "Amazon(Kindle), Chennai, India",
                duration: "(July 2011 - Feb 2013)",
                details: [{
                        title: "Key Deliverables:",
                        items: [
                            "Kindle Fire LockScreen Ads LifeCycle Manager.",
                            "Kindle Fire Out Of The Box Experience Application.",
                            "Kindle Fire Account Management Application."
                        ]
                    },
                    {
                        title: "Details:",
                        items: [
                            "Gained hands on experience with building Android applications.",
                            "Single handedly delivered applications like \"My Account\" which were integrated with FireView Application.",
                            "Learnt Development with Scrum and Agile methodologies."
                        ]
                    }
                ]
            },
            {
                companyName: "Deloitte US India, Hyderabad, India",
                duration: "(June 2010 - July 2011)",
                details: [{
                    title: "Key Deliverables:",
                    items: [
                        "Involved in development of Data Warehouse using ETL tools like Informatica.",
                        "Associated in generation of reports for the end users to use the Data warehouse.",
                        "Engaged with unit-testing of Data Warehouse by writing SQL queries for end-to-end workflow."
                    ]
                }]
            }
        ]
    }]
}