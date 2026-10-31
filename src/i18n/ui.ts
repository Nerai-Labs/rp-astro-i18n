export const ui = {
	en: {
		'services.title': 'Our services',
		'services.description': 'What we do for teams that want a faster site.',
		'services.heading': 'Services for fast sites',
		'services.body': 'We build and tune sites.',
	},
	es: {
		'services.title': 'Nuestros servicios',
		'services.description': 'Lo que hacemos por equipos que quieren un sitio rápido.',
		'services.heading': 'Servicios para sitios rápidos',
		'services.body': 'Construimos y afinamos sitios.',
	},
} as const;

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)['en']) {
		return ui[lang][key];
	};
}
