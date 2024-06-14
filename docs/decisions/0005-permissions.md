# Permissions

* Status: proposed
* Deciders: Glenn, Sehaj, Mahi, Jeff and Harman
* Date: 2024-06-14

Technical Story: Assigning different permissions for nurses, admin and clients.

## Context and Problem Statement

The app registers nurses and lets customers request services, how can we create a safe system that makes sure only authorised users may access certain features? Implementing authentication to provide nurses, administrators, and clients with varying rights while maintaining data privacy and regulatory compliance will be a challenge.

## Considered Options

* Node.js
* Python
* Java
* PHP

## Decision Outcome

Chosen option: "Node.js", because We can use Passport.js for authentication for specific roles.
