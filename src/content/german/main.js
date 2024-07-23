import foundation from './foundation'
import rpa from './rpa'
import testautomation from './testautomation'

export default () => ({
  ...foundation(),
  ...rpa(),
  ...testautomation(),
  langName: 'German',
  newsBanner: '',
  navbar: {
    items: [
      {
        name: 'Jetzt beginnen',
        id: 'getting-started'
      },
      {
        name: 'Ressourcen',
        id: 'resources'
      },
      {
        name: 'Community',
        id: 'community'
      },
      {
        name: 'Entwicklung',
        id: 'development'
      }
    ],
    dropdownDocs: {
      name: 'Doku',
      items: [
        {
          name: 'Anleitungen',
          url: 'https://docs.robotframework.org/docs',
          description: 'Hier starten'
        },
        {
          name: 'Benutzeranleitungen',
          url: 'https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html',
          description: 'Originalhandbuch'
        },
        {
          name: 'Keywords',
          url: 'https://robotframework.org/robotframework/latest/libraries/BuiltIn.html',
          description: 'Built-in Keywords'
        },
        {
          name: 'Bibliothek',
          url: 'https://robotframework.org/robotframework/#standard-libraries',
          description: 'Standardbibliotheken'
        },
        {
          name: 'Public API',
          url: 'https://robot-framework.readthedocs.io/en/stable/',
          description: 'Erweiterungen schreiben'
        }
      ]
    }
  },
  introduction: {
    title: 'Introduction',
    body: `
      <p>
        Robot Framework ist ein Open-Source Automatisierungsframework für die Testautomatisierung und <a href="https://docs.robotframework.org/docs/getting_started/rpa">die robotergestützte Prozessautomatisierung (RPA)</a>.
        Es erhält Unterstützung von der <a href="/foundation/">Robot Framework Foundation</a> und in der Industrie <a href="/users">weitverbreitet</a>.
        </p>
        <p>
        Die <a href="https://docs.robotframework.org/docs/style_guide">benutzerfreundliche und universelle Syntax</a> nutzt Keywords und unterstützt <a href="https://docs.robotframework.org/docs/extending_robot_framework/custom-libraries/python_library">Erweiterungen durch Bibliotheken</a> in
        Python, Java und anderen Programmiersprachen.
        </p>
        <p class="mb-none">
        Es integriert sich mit anderen Tools für umfassende Automatisierung ohne Lizenzgebühren,
        wird durch eine starke Community mit hunderten von <a href="#resources">Drittanbieter-Bibliotheken</a> unterstützt.
      </p>
    `,
    usedByTitle: 'Robot Framework wird verwendet von ...',
    companies: [
      {
        name: 'ABB',
        description: 'ABB is using Robot Framework in software development for testing distribution automation related configuration tools, web interfaces and embedded devices.',
        imgName: 'ABB.svg'
      },
      {
        name: 'Cisco',
        description: 'Cisco’s Customer Experience (CX) supports the testing & validation of Cisco and 3rd party solutions deployed by our customers. This includes Solution Validation Services (SVS) delivered both on Cisco-premise and customer-premise.',
        imgName: 'Cisco.svg'
      },
      {
        name: 'Condé Nast',
        description: 'Condé Nast <a href="https://technology.condenast.com/story/automated-testing-qa-brand-sites-robot-framework">transformed their quality assurance for their brand sites,</a> such as Brides, Wired and Architectural Digest, from an entirely manual process to automated one with Robot Framework.',
        imgName: 'Condé_Nast.svg'
      },
      {
        name: 'KONE',
        description: 'KONE is widely using Robot Framework in software development for testing embedded systems in elevators and escalators.',
        imgName: 'Kone.svg'
      },
      {
        name: 'Finnair',
        description: 'Finnair is using Robot Framework to support Finnair digital platform development.',
        imgName: 'Finnair.svg'
      },
      {
        name: 'Finnish Tax Administration',
        description: `Finnish Tax Administration is using Robot Framework in multiple projects.
        Robot Framework is one of the core tools in their development to make Quality Assurance and Automation.`,
        imgName: 'Vero.svg'
      },
      {
        name: 'Juniper Networks',
        description: 'Juniper Networks has built an extensive automation framework on top of Robot Framework for end-to-end qualification of Juniper products. It is used extensively in multiple groups including engineering and support.',
        imgName: 'Juniper_Networks.svg'
      },
      {
        name: 'Naval Research Laboratory',
        description: 'The Naval Research Laboratory extends Robot Framework to provide a seamless integration with the <a href="https://www.nrl.navy.mil/itd/imda/products/sage" target="_blank">SAGE</a> multi-agent system. This integration enables Robot Framework to drive distributed simulation and monitoring for test automation of SOA systems.',
        imgName: 'Naval_Research_Laboratory.svg'
      },
      {
        name: 'Nokia',
        description: 'Robot Framework was initially developed at Nokia Networks and it is used extensively around the whole company. It is used for testing different devices, software systems and protocols via GUIs, APIs and various other interfaces.',
        imgName: 'Nokia.svg'
      }
    ]
  },
  gettingStarted: {
    title: 'Jetzt beginnen',
    body:
      `<cite>Code is worth a thousand words. / Code sagt mehr als tausend Worte.</cite>
      <p>Unten finden Sie einen Live-Editor für Robot Framework. 
      Sie können gerne damit experimentieren! Falls Sie Fehler finden, melden Sie diese bitte unter
      <a href="https://github.com/robotframework/robotframework.github.com/issues" target="_blank">Github Probleme.</a></p>
      <p>Um mit der Nutzung von Robot Framework in Ihrem eigenen Projekt zu beginnen, schauen Sie bitte unter den Tabs 'Installieren' und 'Lernen' nach. Schauen Sie sich auch unbedingt die neuen <a href="https://docs.robotframework.org/">Robot Framework Doku</a> an!</p>`,
    tabs: [
      {
        name: 'Editor'
      },
      {
        name: 'Installieren',
        description: `
          <p>"Robot Framework ist in Python implementiert, daher müssen Sie Python installiert
          <a href="https://www.python.org/downloads/" target="_blank">Python installiert</a> haben.
          <br>Auf Windows-Rechnern stellen Sie sicher, dass Sie während der Installation
          <a href="https://docs.python.org/3/using/windows.html#the-full-installer" target="_blank">Python zum PATH</a>
          hinzufügen.</p>
          <p>Die Installation von Robot Framework mit pip ist unkompliziert:
          <pre class="line">pip install robotframework</pre></p>
          <p>Um zu überprüfen, ob die Installation erfolgreich war, führen Sie den folgenden Befehl aus:
          <pre class="line">robot --version</pre></p>
          <p>Für eine vollständige Anleitung siehe
          <a href="https://github.com/robotframework/robotframework/blob/master/INSTALL.rst" target="_blank">Installationsanweisungen</a>.
          Es behandelt auch Themen wie das Ausführen von Robot Framework auf Jython (JVM) und IronPython (.NET).</p>
          <p>Jetzt sind Sie bereit, Ihre ersten Tests zu schreiben!</p>
          `
      },
      {
        name: 'Lernen'
      }
    ]
  },
  community: {
    title: 'Community',
    body:
      `<p>Robot Framework hat eine lebendige Gemeinschaft von Testbegeisterten. Zögern Sie nicht, vorbeizuschauen, wenn Sie Fragen haben,
      Ratschläge benötigen oder einfach nur mit Gleichgesinnten in Kontakt treten möchten!</p>
      <p>Es gibt auch eine jährliche RoboCon-Konferenz, die in Helsinki, Finnland, stattfindet. 
      Für weitere Informationen und um Vorträge der letzten Jahre anzusehen, besuchen Sie
      <a href="https://robocon.io" target="_blank">robocon.io</a> oder unseren
      <a href="https://www.youtube.com/channel/UCuOaCtN8bI9O_E2VYIumIqg" target="_blank">YouTube-Kanal</a>.</p>
      <p>Um Robot Framework zu unterstützen, finden Sie ein <a href="https://supergeek.de/de/products/24916-im-the-robot-dark/" target="_blank">&#128085; T-Shirt</a>
      und eine <a href="https://supergeek.de/de/products/24915-im-the-robot-bright/1232-tasse-coffee-mug/" target="_blank">&#9749; Kaffeetasse</a>
      unserem <a href="https://shop.robotframework.org/" target="_blank">Shop<a>.</p>
`,
    links: {
      forum: {
        title: 'Forum',
        description: 'Official Robot Framework forum.'
      },
      slack: {
        title: 'Slack',
        description: 'Community team chat.<br><a href="https://rf-invite.herokuapp.com/" target="_blank">Click for invite!</a>'
      }
    }
  },
  resources: {
    title: 'Resources',
    body:
      `<p>Robot Framework is open source and supported by <a href="/foundation/">Robot Framework Foundation</a>.
      There is a huge community of contributors around the tool.
      The software is built with expandability in mind and there are numerous ways to extend
      it's use cases for various needs.</p>
      <p>If you have created or found a library that you think should be listed here, please
      <a href="https://github.com/robotframework/robotframework.github.com" target="_blank">let us know</a>
      by submitting a pull request or an issue. You are also welcome to report unmaintained
      ones that shouldn't be listed anymore.`,
    tabs: [
      {
        name: 'Libraries',
        key: 'libraries',
        description: `Separately developed external libraries that
        can be installed based on your needs. Creating your own libraries is a breeze. For instructions, see
        <a href="https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-test-libraries" target="_blank">
        creating test libraries</a> in Robot Framework User Guide.`
      },
      {
        name: 'Built-in',
        key: 'builtin',
        description: `Libraries and tools that are bundled with the framework. Libraries provide
        the actual automation and testing capabilities to Robot Framework by providing keywords.`
      },
      {
        name: 'Tools',
        key: 'tools',
        description: `Supporting tools ease automation: editing, running, building and so on.
        Most of these tools are developed as separate projects, but some are built into the framework itself.`
      }
    ],
    mobileTitles: [
      'Standard',
      'External'
    ]
  },
  development: {
    title: 'Development',
    body: `<p>Development of Robot Framework is funded by the non-profit
    <a href="/foundation/">Robot Framework Foundation</a>. It consists
    of companies and organizations that want to ensure the continuity of Robot Framework now and
    in the future.</p>
    <p>Project is hosted at <a href="https://github.com/robotframework/robotframework" target="_blank">GitHub</a></p>
    <p>Thanks to the sponsors, Robot Framework remains completely
    free to use while being actively maintained and developed. Foundation also covers other
    related expenses such as the development of this website and organizing various meetups.`,
    sponsorBoxTitle: 'Members of Robot Framework Foundation',
    howToJoin: '<a href="/foundation/">Join</a>'
  },
  usersPage: {
    title: 'Users of Robot Framework',
    body: `If you'd like your company added here, please submit a
      <a href="https://github.com/robotframework/robotframework.github.com/pulls">pull request</a> or an
      <a href="https://github.com/robotframework/robotframework.github.com/issues">issue</a>.`
    // list of users is found in ./resources/users.js
  }
})
