import { IPXOptions } from 'ipx';

interface ImageModifiers {
    width: number;
    height: number;
    fit: string;
    format: string;
    [key: string]: any;
}
interface ImageOptions {
    provider?: string;
    preset?: string;
    modifiers?: Partial<ImageModifiers>;
    [key: string]: any;
}
interface ImageSizesOptions extends ImageOptions {
    sizes: Record<string, string | number> | string;
}
declare type ProviderGetImage = (src: string, options: ImageOptions, ctx: ImageCTX) => ResolvedImage;
interface ImageProvider {
    defaults?: any;
    getImage: ProviderGetImage;
    validateDomains?: Boolean;
    supportsAlias?: Boolean;
}
interface CreateImageOptions {
    providers: {
        [name: string]: {
            defaults: any;
            provider: ImageProvider;
        };
    };
    presets: {
        [name: string]: ImageOptions;
    };
    provider: string;
    screens: Record<string, number>;
    alias: Record<string, string>;
    domains: string[];
}
interface ImageInfo {
    width: number;
    height: number;
    placeholder?: string;
}
interface ResolvedImage {
    url: string;
    format?: string;
    isStatic?: boolean;
    getMeta?: () => Promise<ImageInfo>;
}
interface ImageSizes {
    srcset: string;
    sizes: string;
    src: string;
}
interface Img {
    (source: string, modifiers?: ImageOptions['modifiers'], options?: ImageOptions): ResolvedImage['url'];
    options: CreateImageOptions;
    getImage: (source: string, options?: ImageOptions) => ResolvedImage;
    getSizes: (source: string, options?: ImageOptions, sizes?: string[]) => ImageSizes;
    getMeta: (source: string, options?: ImageOptions) => Promise<ImageInfo>;
}
declare type $Img = Img & {
    [preset: string]: $Img;
};
interface ImageCTX {
    options: CreateImageOptions;
    nuxtContext: {
        ssrContext: any;
        cache?: any;
        isDev: boolean;
        isStatic: boolean;
        nuxtState?: any;
    };
    $img?: $Img;
}
interface ImageSize {
    width: number;
    media: string;
    breakpoint: number;
    format: string;
    url: string;
}
interface RuntimePlaceholder extends ImageInfo {
    url: string;
}
declare type OperationFormatter = (key: string, value: string) => string;
declare type OperationMapper = {
    [key: string]: string | false;
} | ((key: string) => string);
interface OperationGeneratorConfig {
    keyMap?: OperationMapper;
    formatter?: OperationFormatter;
    joinWith?: string;
    valueMap?: {
        [key: string]: OperationMapper;
    };
}
declare type MapToStatic = (image: ResolvedImage, input: string) => string;

declare type ProviderSetup = (providerOptions: ImageModuleProvider, moduleOptions: ModuleOptions, nuxt: any) => void | Promise<void>;
interface InputProvider<T = any> {
    name?: string;
    provider?: string;
    options?: T;
    setup?: ProviderSetup;
}
interface ImageProviders {
    cloudinary?: any;
    contentful?: any;
    fastly?: any;
    glide?: any;
    gumlet?: any;
    imagekit?: any;
    imgix?: any;
    prismic?: any;
    twicpics?: any;
    storyblok?: any;
    strapi?: any;
    imageengine?: any;
    ipx?: Partial<IPXOptions>;
    static?: Partial<IPXOptions>;
}
interface ModuleOptions extends ImageProviders {
    staticFilename: string;
    provider: CreateImageOptions['provider'];
    presets: {
        [name: string]: ImageOptions;
    };
    dir: string;
    domains: string[];
    sharp: any;
    alias: Record<string, string>;
    screens: CreateImageOptions['screens'];
    internalUrl: string;
    providers: {
        [name: string]: InputProvider | any;
    } & ImageProviders;
    [key: string]: any;
}
interface ImageModuleProvider {
    name: string;
    importName: string;
    options: any;
    provider: string;
    runtime: string;
    runtimeOptions: any;
    setup: ProviderSetup;
}

declare module '@nuxt/types' {
    interface Context {
        $img: $Img;
    }
    interface NuxtAppOptions {
        $img: $Img;
    }
    interface Configuration {
        image?: Partial<ModuleOptions>;
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $img: $Img;
    }
}
declare module 'vuex/types/index' {
    interface Store<S> {
        $img: $Img;
    }
}

export { $Img, CreateImageOptions, ImageCTX, ImageInfo, ImageModifiers, ImageModuleProvider, ImageOptions, ImageProvider, ImageProviders, ImageSize, ImageSizes, ImageSizesOptions, Img, InputProvider, MapToStatic, ModuleOptions, OperationFormatter, OperationGeneratorConfig, OperationMapper, ProviderGetImage, ProviderSetup, ResolvedImage, RuntimePlaceholder };
