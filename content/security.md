---
title: Security & Disclosure Policy
tocDepth: 2
---

Chase Podiatry is committed to keeping your data secure.
We believe that good security comes from being open and transparent.
This document sets out some of the steps we take to ensure that, as well as our policy for vulnerability reporting and
disclosure.

<aside class="border-l pl-5 dark:text-gray-400 text-gray-500">

This is a technical document designed for information security specialists, and whilst we've tried to write it in a way
everyone can understand, most people will find the answers they’re looking for in out [privacy policy](/privacy/).

</aside>

## Technical Security 🔐

### Access Control

We tightly control all access to Chase Podiatry systems to ensure only those who need access to your data to perform
their job have access.
These measures include:

* individual user accounts per person with assigned roles;
* [WebAuthN Passkeys](https://webauthn.guide/) to login to sensitive areas such as patient records;
* [Cloudflare Zero Trust](https://www.cloudflare.com/zero-trust/) protection on remotely hosted services;
* [Cloudflare tunnels](https://www.cloudflare.com/products/tunnel/) to keep firewall ports closed; and
* WPA-2/3 EAP-(T)TLS individual access to secure staff WiFi connection.

### Data transport

Most of the processing of your data occurs either in our local networks or secure off-site environment.
Whenever we transmit data across the public internet between our locations it is **always encrypted**,
and we encrypt most local data where technically possible.

Between our physical locations, we encrypt data at the perimeter with an IPSec VPN, often with TLS encryption ontop for
added
security.

For internet and cloud hosted application traffic such as our patient records system, HTTPS with a minimum
of [Mozilla's modern policy](https://ssl-config.mozilla.org/) is used.

## Human security 👮

To compliment our technical security measures, we also consider the human factors around data security.
To achieve this,
we run regular information security training course covering the most common attacks our staff are likely to encounter,
specifically including;

* phishing & spear-phishing attacks;
* identifying and mitigating on-path attacks;
* handling sensitive data confidentially; and
* correctly identify patients while preserving their privacy.

## Security vulnerability policy 📁

If you believe you have found a secuity vulnerability in a Chase Podiatry system, please submit your report to us.

<div class="rounded-xl bg-chase-purple-200 dark:bg-chase-purple-700 p-3 text-2xl text-center">

To report and urgent cyber-security incident or a vulnerability being actively exploited, call <TelLink></TelLink>.

</div>

This vulnerability disclosure policy applies to any vulnerabilities you are considering reporting to us.
We recommend reading this policy fully before you report a vulnerability and are always acting in compliance with it.

### Reporting

If you believe you have found a security vulnerability, please submit your report to us:

* call :TelLink;
* email :MailLink (contact us for our public encryption key); or
* write to us at :StreetAddress.

In your report please include details of:

* the URL or IP where the vulnerability can be observed;
* a brief description of the vulnerability, for example; "XSS vulnerability";
* your contact details so we can get in touch if we need more information; and
* steps to reproduce.
  These should be a benign, non-destructive, proof of concept.
  This helps ensure we can triage reports quickly and accurately.
  It also reduces the likelihood of duplicate reports or malicious exploitation of some vulnerability such as  
  sub-domain takeovers.

### What to expect

After you have submitted your report,
we will respond to your report within 5 working days and aim to triage your report with 10 working days.
We also aim to keep you informed of our progress.

We assess remediation priority by looking at the impact, severity, and exploit complexity.
Some reports might take longer to triage or address, you are welcome to ask about the status,
but please avoid doing so more than once every 14 days.
This allows us to focus on remediation.

We will notify you using the details you provide when we have remediated the reported vulnerability,
and we may invite you to confirm that the solution covers the vulnerability adequately.

Once your vulnerability has been resolved, we welcome requests to disclose your report.
We'd like to unify guidance to affected users, so please do continue to coordinate public disclosure with us.

### Guidance

You must **NOT**:

* break any applicable law or regulations;
* access unnecessary, excessive, or significant amounts of data;
* continue to access data after you have collected enough to submit a report;
* modify data in our systems or services;
* use high-intensity invasive or destructive scanning tools to find vulnerabilities;
* attempt or report and form of denial of service, for example, overwhelming a service with a high volume of requests;
* disrupt our services or systems;
* submit repots detailing non-exploitable vulnerabilities or reports indicating that services do not fully align with
  "best practice", for example, missing security headers, unless this forms part of a larger vulnerability;
* communicate any vulnerabilities or assoicated details other than by means described in this police or the published
  `security.txt`;
* social engineer, 'phish', or physically attack our staff or infrastructure; or
* demand financial compensation in order to disclose a vulnerability.

You must:

* always comply with data protection rules and must not violate the privacy of our staff, patients, or systems.
  You must not, for example, share, redistribute, or fail to properly secure data retrieved from our systems; and
* securely delete all data retrieved during your research as soon as it is no longer required, or within 1 month of the
  vulnerability being resolved, whichever occurs first (or as otherwise required by data protection law).

### Legalities

This policy is designed to be compatible with common vulnerability disclosure good practice.
It does not permit you to act in any manner that is inconsistent with the law,
or which might cause us or any other party to be in breach of any legal obligations.

However, if a third party initiates legal action against you, we will take steps to support your work where it is
compliant with this policy.

Thank you for helping keep Chase Podiatry and our patients safe.
