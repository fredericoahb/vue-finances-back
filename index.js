const { prisma } = require('./generated/prisma-client')

async function main() {

  await prisma.createUser({
    name: 'Frederico Balieiro',
    email: 'fredericoahb@email.com',
    password: '123456'
  })

  const users = await prisma.users()

  console.log('Users: ', users)

}

main().catch(e => console.error(e))