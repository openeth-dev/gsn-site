import { useRouter } from 'next/router'
import Link from 'next/link'

import { MainLayout } from 'lib/components/layout/MainLayout'
import { Section } from 'lib/components/layout/Section'
import { RelayForm } from 'lib/components/RelayForm'
import { DynamicApolloWrapper } from 'lib/components/DynamicApolloWrapper'
import { utils } from 'dapp-core'
import { RelayWrapper } from 'lib/components/RelayWrapper'

function RelayDashboard() {
  const router = useRouter()
  const { relayHubAddress, relayAddress, relayUrl } = router.query

  return (
    <MainLayout>
      <DynamicApolloWrapper>
        <Section>
          <RelayWrapper
            relayHubAddress={relayHubAddress}
            relayAddress={relayAddress}
            relayUrl={relayUrl}
            >
              {(relayWrapperProps) => {
                console.log(relayWrapperProps)
                return (
                  <>
                    <p>
                      <Link href='/relay-hubs'><a>Relay Hubs</a></Link> &raquo;&nbsp;
                      <Link href={`/relay-hubs/${relayHubAddress}`}><a>{utils.shortenAddress(relayHubAddress)}</a></Link> &raquo;&nbsp;
                      Relay &raquo;&nbsp;
                      {relayWrapperProps.relayAddress}
                    </p>
                  </>
                )
              }}
          </RelayWrapper>
          <RelayForm
            relayHubAddress={relayHubAddress}
            relayAddress={relayAddress}
            relayUrl={relayUrl} />
        </Section>
      </DynamicApolloWrapper>
    </MainLayout>
  )
}

export default RelayDashboard;
