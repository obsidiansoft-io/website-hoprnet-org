import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Image from '../elements/Image'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

class FeaturesTiles extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      redirect,
      ...props
    } = this.props

    const outerClasses = classNames(
      'features-tiles section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    )

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    )

    const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left')

    const sectionHeader = {
      title: 'HOPR is:',
      paragraph: undefined,
    }

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>
              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('../../assets/images/icons/common-file-lock@140x140.png')}
                        alt="File Lock Icon"
                        width={56}
                        height={56}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Enabling Data Privacy</h4>
                    <p className="m-0 text-sm">
                      In order to give people and companies the freedom to decide about the privacy level of their data,
                      we are building the HOPR network.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="100"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('../../assets/images/icons/user-signal@140x140.png')}
                        alt="Sharing Icon"
                        width={56}
                        height={56}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Open Source Support</h4>
                    <p className="m-0 text-sm">
                      Our experts are actively supporting the blockchain community to make this space a better place,
                      for the good of all of us.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('../../assets/images/icons/love-heart-keyhole@140x140.png')}
                        alt="Heart Icon"
                        width={56}
                        height={56}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Hackathons & Community</h4>
                    <p className="m-0 text-sm">
                      In order to grow our network and actively interact with the community, we will organize events
                      <span className="text-color-primary">(coming mid July 2020)</span>.
                    </p>
                  </div>
                </div>
              </div>

              <a href="mailto:rik.krieger@hoprnet.io?subject=Partnership" target="_blank" rel="noopener noreferrer">
                <div
                  className="tiles-item reveal-from-bottom"
                  data-reveal-container=".tiles-wrap"
                  data-reveal-delay="300"
                >
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={require('../../assets/images/icons/building-modern@140x140.png')}
                          alt="Modern Building Icon"
                          width={56}
                          height={56}
                        />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">Your company & our ecosystem</h4>
                      <p className="m-0 text-sm">
                        HOPR is looking for partners who want to benefit from our network. If Data Privacy is important
                        to you, get in contact with us.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

FeaturesTiles.propTypes = propTypes
FeaturesTiles.defaultProps = defaultProps

export default FeaturesTiles
