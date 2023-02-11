import { ErrorMessage } from 'formik';
import {
  Container,
  Description,
  FieldStyled,
  LabelField,
  LabelFieldTitle,
  RadioBtnBox,
  RadioBtnCategory,
  RadioInput,
  TitleModal,
} from './ModalAddNotice.styled';

// Categories;
const categories = [
  { name: 'lost/found', value: 'lost/found', id: '1' },
  { name: 'In good hands', value: 'for-free', id: '2' },
  { name: 'sell', value: 'sell', id: '3' },
];

export const ModalAddNoticeFistStep = ({values}) => {
  return (<>
          <TitleModal>Add pet</TitleModal>
          <Container>
            <Description>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </Description>
            <RadioBtnBox>
              {categories.map(category => (
                <li key={category.id}>
                  <RadioBtnCategory
                    className={
                      values.category === category.value ? 'active' : ''
                    }
                  >
                    {category.name}
                    <RadioInput
                      type="radio"
                      name="category"
                      value={category.value}
                    />
                  </RadioBtnCategory>
                </li>
              ))}
              {/* <div>{errors.category}</div> */}
            </RadioBtnBox>
            <div>
              <LabelField>
                <LabelFieldTitle>
                  Tittle of ad <span>*</span>
                </LabelFieldTitle>
                <FieldStyled
                  name="title"
                  type="text"
                  placeholder="Type name"
                  // value={values.title}
                  // onChange={handleChange}
                />
              </LabelField>
              <ErrorMessage name="title" component="span"/>
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Name pet</LabelFieldTitle>
                <FieldStyled
                  name="name"
                  type="text"
                  placeholder="Type name pet"
                  // value={values.name}
                  // onChange={handleChange}
                />
              </LabelField>
              <ErrorMessage name="name" component="span"/>
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Date of birth</LabelFieldTitle>
                <FieldStyled
                  name="birthday"
                  type="text"
                  placeholder="Type date of birth XX.XX.XXXX"
                  // value={values.birthday}
                  // onChange={handleChange}
                />
              </LabelField>
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Breed</LabelFieldTitle>
                <FieldStyled
                  name="breed"
                  type="text"
                  placeholder="Type breed"
                  // value={values.breed}
                  // onChange={handleChange}

                />
              </LabelField>
              <ErrorMessage name="breed" component="span"/>
            </div>
          </Container>
          </>
  );
};
