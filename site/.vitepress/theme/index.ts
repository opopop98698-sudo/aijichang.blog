import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import './styles/index.css';

import BrandCard from './components/BrandCard.vue';
import PlanTable from './components/PlanTable.vue';
import PlatformTaskMatrix from './components/PlatformTaskMatrix.vue';
import EvidenceBadge from './components/EvidenceBadge.vue';
import RegionSelector from './components/RegionSelector.vue';
import TestReport from './components/TestReport.vue';
import SourceNote from './components/SourceNote.vue';
import OfferCard from './components/OfferCard.vue';
import DecisionTree from './components/DecisionTree.vue';
import FAQBlock from './components/FAQBlock.vue';
import RelatedLinks from './components/RelatedLinks.vue';
import InteractiveTools from './components/InteractiveTools.vue';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('BrandCard', BrandCard);
    app.component('PlanTable', PlanTable);
    app.component('PlatformTaskMatrix', PlatformTaskMatrix);
    app.component('EvidenceBadge', EvidenceBadge);
    app.component('RegionSelector', RegionSelector);
    app.component('TestReport', TestReport);
    app.component('SourceNote', SourceNote);
    app.component('OfferCard', OfferCard);
    app.component('DecisionTree', DecisionTree);
    app.component('FAQBlock', FAQBlock);
    app.component('RelatedLinks', RelatedLinks);
    app.component('InteractiveTools', InteractiveTools);
  }
};
