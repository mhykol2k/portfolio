import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Project = () => (
    <Layout title="EPOS Application">
      <Container>
        <Title>
          EPOS-BAR Application <Badge>Dec 2021 - Aug 2022</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/projects/gr8danes_icon.png" alt="icon" />
        </Center>
        <P>
          EPOS Application that communicates with existing inventory management system via API.
        </P>
        <P>
          Currently the production version is being used in the clients bar.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>ファイル転送がサイズ制限無く高速に出来ます。</ListItem>
          <ListItem>複数のコンピュータ間で同時に通信が出来ます。</ListItem>
          <ListItem>
            簡単接続機能により、面倒な接続作業を自動で行います。
          </ListItem>
          <ListItem>
            一つのポート開放だけで、様々な通信が出来る強力なプロトコル。
          </ListItem>
          <ListItem>
            IM機能を装備しています。会話中に写真を表示したりもできます。
          </ListItem>
          <ListItem>
            ファイル共有機能で、設定した公開フォルダを相手に見せることが出来ます。
          </ListItem>
          <ListItem>MSN/Windowsメッセンジャーからの招待で接続できます。</ListItem>
          <ListItem>
            画面転送機能で、相手に自分のデスクトップを見せることが出来ます。
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>IOS, MacOS, Android, Windows, Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter, SQL</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
              gr8-latest-1.1.0
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>22/08/2022</span>
          </ListItem>
          <ListItem>
            <Meta>Manual</Meta>
            <Link href="https://w.atwiki.jp/amembo/">wiki</Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media</Center>
        </Heading>
        <SimpleGrid columns={1} gap={2}>
          <WorkImage src="/images/projects/image_01.png" alt="image" />
          <WorkImage src="/images/projects/image_02.png" alt="image" />
        </SimpleGrid>
        <WorkImage src="/images/projects/image_03.png" alt="image" />
      </Container>
    </Layout>
  )
  
  export default Project
  export { getServerSideProps } from '../../components/chakra'