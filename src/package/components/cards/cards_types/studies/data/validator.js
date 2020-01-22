import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';

export const StudiesValidator = formatMessage =>
    Yup.object().shape({
        education: Yup.array().of(
            Yup.object({
                institution: Yup.string().required(formatMessage(validationTranslations.required)),
                studyType: Yup.string().required(formatMessage(validationTranslations.required)),
                area: Yup.string().required(formatMessage(validationTranslations.required)),
                endDate: Yup.object().test(
                    'is-not-empty',
                    formatMessage(validationTranslations.required),
                    value => !!value && !Number.isNaN(Number(value.year()))
                )
            })
        )
    });
