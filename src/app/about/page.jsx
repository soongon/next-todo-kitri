
import React from 'react'

export default async function AboutPage() {

    const response = await fetch(`http://localhost:3000/api`);
    const json = await response.json();
    console.log(json);

    return (
        <div>AboutPage {json.msg}</div>
    )
}
