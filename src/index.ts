#!/usr/bin/env node

import { program } from 'commander'
import { Octokit } from 'octokit'

const VERSION = '__VERSION__'

const octokit = new Octokit()

program
  .name('gio')
  .description('Orchestrate and harmonize all your repositories setup and files from a CLI.')
  .version(VERSION)

program
  .command('list <username>')
  .description('List all your repositories.')
  .action(async username => {
    const repositories = await octokit.rest.repos.listForUser({
      username,
    })

    // eslint-disable-next-line no-console
    console.log(repositories.data.map(({ full_name }) => `- ${full_name}`).join('\n'))
  })

program.parse()
