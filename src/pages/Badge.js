import { Grid, Container, Form, Input, Button} from 'semantic-ui-react'
import { create } from 'ipfs-http-client'
import React, { useState } from 'react'

function Main(props) {
  // IPFS 
  const [ipfs, setIpfs] = useState(null)
  const [fileHash, setFileHash] = useState(null)

  const Connect = ({ setIpfs }) => {
    const [multiaddr, setMultiaddr] = useState('/ip4/127.0.0.1/tcp/5002')
    const [error, setError] = useState(null)

    const connect = async (e) => {
      try {
        const http = create(multiaddr)
        const isOnline = await http.isOnline()

        if (isOnline) {
          setIpfs(http)
          setError(null)
        }
      }
      catch(err) {
        setError(err.message)
      }
    }

    return (
        <Container>
          <Form onSubmit={(e)=>e.preventDefault()}>
            <Input 
                label='IPFS Connection' 
                placeholder='IPFS Connection'
                type="text"
                state="skills"
                required 
                value={multiaddr}
                onChange={(e)=>setMultiaddr(e.target.value) }
              />
              <Button
                id="ipfs-connect-submit"
                type="submit"
                label="Connect"
                onClick={connect}
              />    
          </Form>
          {error && (<div>Error: {error.message || error}</div>)}
        </Container>
    )
  }
  
  const SaveFile = ({ ipfs }) => {
    const [error, setError] = useState(null)

    const captureFile = (event) => {
      event.stopPropagation()
      event.preventDefault()
      saveToIpfsWithFilename(event.target.files) 
    }
  
    const saveToIpfsWithFilename = async ([file]) => {
      const fileDetails = {
        path: file.name,
        content: file
      }

      const options = {
        wrapWithDirectory: true,
        progress: (prog) => console.log(`received: ${prog}`)
      }

      try {
        const added = await ipfs.add(fileDetails, options)
        setFileHash(added.cid.toString())
      } catch (err) {
        setError(err.message)
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault()
    }

    return (
      <>
        <h3>Connected to IPFS. Please upload a badge</h3>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Badge File"
            id="badge-file"
            name="badge-file"
            type="file"
            onChange={captureFile}
          />
        </Form>

        {fileHash &&
          <div>
            <a id="gateway-link" target='_blank'
              href={'https://ipfs.io/ipfs/' + fileHash}>
              {fileHash}
            </a>
          </div>
        }

        {error && (
          <div>Error: {error.message || error}</div>
        )}
      </>
    )
  }

  // Certification Details Data 
  const initFormState = {
    certificationtitle: '',
    certificationdesc: '',
    skills: '',
  }
  const [ formState ,setFormState] = useState(initFormState)
  const { certificationtitle, certificationdesc, skills } = formState
  
  const onInputUpdate= (_, data) => {
    setFormState(formState => {
      let res 
      const { state, value } = data 
      res = { ...formState, [state]: value}
      return res 
    })
  }

  return (
    <Container>
      <h1>Create New Certification</h1>
      <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <h2>Add Certification Badge</h2>
              <Container>
                <Connect setIpfs={setIpfs}></Connect>
                <br/>
                { ipfs && <SaveFile ipfs={ipfs}></SaveFile>}
              </Container>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form>
              <h2>Add Certification Details</h2>
                <Form.Field key="certificationtitle">
                  <Input 
                    label='Certification Title' 
                    placeholder='Certification Title'
                    type="text"
                    state="certificationtitle"
                    value={certificationtitle}
                    onChange={onInputUpdate}
                  />
                </Form.Field>
                <Form.Field key="certificationdesc">
                  <Input 
                    label='Certification Description' 
                    placeholder='Enter certification description'
                    type="text"
                    state="certificationdesc"
                    value={certificationdesc}
                    onChange={onInputUpdate}
                  />
                </Form.Field>
                <Form.Field key="skills">
                  <Input 
                    label='Skills' 
                    placeholder='Enter skills. Separate skills with a comma(,).'
                    type="text"
                    state="skills"
                    value={skills}
                    onChange={onInputUpdate}
                  />
                </Form.Field>
                </Form>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </Container>
  ) 
}

export default function Badge(props) {
  return <Main {...props} /> 
}
