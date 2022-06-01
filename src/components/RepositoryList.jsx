import { useState, useEffect } from "react"
import { ReposiotryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: 'Daora',
  description: 'KKKKKKKKK',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState([])

  useEffect(() => { }, [repositories])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <ReposiotryItem repository={repository} />
        <ReposiotryItem />
        <ReposiotryItem />
        <ReposiotryItem />
      </ul>
    </section>
  )
}