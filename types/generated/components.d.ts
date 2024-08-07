import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomComponentsImageComponent extends Schema.Component {
  collectionName: 'components_custom_components_image_components';
  info: {
    displayName: 'ImageComponent';
    icon: 'arrowDown';
  };
  attributes: {
    position: Attribute.Enumeration<['leftImage', 'rightImage']>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CustomComponentsTaskComponent extends Schema.Component {
  collectionName: 'components_custom_components_task_components';
  info: {
    displayName: 'TaskComponent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    titleTextColor: Attribute.String;
    description: Attribute.RichText;
    buttonLabel: Attribute.String;
    buttonColor: Attribute.String;
    buttonRedirectUrl: Attribute.String;
    leftImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageComponent: Attribute.Component<'custom-components.image-component'>;
  };
}

export interface LevelLevel1Component extends Schema.Component {
  collectionName: 'components_level_level1_components';
  info: {
    displayName: 'Level1Component';
  };
  attributes: {
    title1: Attribute.String;
    Level2Component: Attribute.Component<'level.level2-component'>;
    title: Attribute.String;
  };
}

export interface LevelLevel2Component extends Schema.Component {
  collectionName: 'components_level_level2_components';
  info: {
    displayName: 'Level2Component';
  };
  attributes: {
    title2: Attribute.String;
  };
}

export interface PageImageDComponent extends Schema.Component {
  collectionName: 'components_page_image_d_components';
  info: {
    displayName: 'ImageDComponent';
    description: '';
  };
  attributes: {
    mainImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.Text;
    code: Attribute.String;
  };
}

export interface PageImageGComponent extends Schema.Component {
  collectionName: 'components_page_image_g_components';
  info: {
    displayName: 'ImageGComponent';
    description: '';
  };
  attributes: {
    code: Attribute.String;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface PageImageGridComponent extends Schema.Component {
  collectionName: 'components_page_image_grid_components';
  info: {
    displayName: 'ImageGridComponent';
  };
  attributes: {};
}

export interface PageYoutubeComponent extends Schema.Component {
  collectionName: 'components_page_youtube_components';
  info: {
    displayName: 'YoutubeComponent';
    description: '';
  };
  attributes: {
    youtubeUrl: Attribute.String;
    code: Attribute.String;
  };
}

export interface SharedRelatedArticle extends Schema.Component {
  collectionName: 'components_shared_related_articles';
  info: {
    displayName: 'relatedArticle';
    icon: 'check';
  };
  attributes: {
    intro: Attribute.String;
    article: Attribute.Relation<
      'shared.related-article',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'arrowUp';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    sharedImage: Attribute.Component<'shared.shared-image'>;
  };
}

export interface SharedSharedImage extends Schema.Component {
  collectionName: 'components_shared_shared_images';
  info: {
    displayName: 'sharedImage';
    icon: 'picture';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'custom-components.image-component': CustomComponentsImageComponent;
      'custom-components.task-component': CustomComponentsTaskComponent;
      'level.level1-component': LevelLevel1Component;
      'level.level2-component': LevelLevel2Component;
      'page.image-d-component': PageImageDComponent;
      'page.image-g-component': PageImageGComponent;
      'page.image-grid-component': PageImageGridComponent;
      'page.youtube-component': PageYoutubeComponent;
      'shared.related-article': SharedRelatedArticle;
      'shared.seo': SharedSeo;
      'shared.shared-image': SharedSharedImage;
    }
  }
}
