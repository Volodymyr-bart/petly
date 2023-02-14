import { Categories } from 'utils/noticesCatList';

import {
  Container,
  Description,
  ErrorMessageStyled,
  FieldStyled,
  LabelField,
  LabelFieldTitle,
  RadioBtnBox,
  RadioBtnCategory,
  RadioInput,
  TitleModal,
} from './ModalAddNotice.styled';

const categories = [
  { name: 'lost/found', value: Categories.LOST_FOUND, id: '1' },
  { name: 'In good hands', value: Categories.IN_GOOD_HANDS, id: '2' },
  { name: 'sell', value: Categories.SELL, id: '3' },
];

export const ModalAddNoticeFistStep = ({values}) => {
  return (<>
          <TitleModal>Add pet</TitleModal>
          <Container>
            <Description>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </Description>
            <div>
           <LabelFieldTitle>Choose category<span>*</span>:
        </LabelFieldTitle>
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
                      className='hidden'
                    />
                  </RadioBtnCategory>
                  </li>
              ))}
              {/* <ErrorMessageStyled name='category' component="span"/> */}
            </RadioBtnBox>
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>
                  Tittle of ad <span>*</span>
                </LabelFieldTitle>
                <FieldStyled
                  name="title"
                  type="text"
                  placeholder="Type name"
                />
              </LabelField>
              <ErrorMessageStyled name='title' component="span"/>
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Name pet</LabelFieldTitle>
                <FieldStyled
                  name="name"
                  type="text"
                  placeholder="Type name pet"
                />
              </LabelField>
              <ErrorMessageStyled name='name' component="span"/>
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Date of birth</LabelFieldTitle>
                <FieldStyled
                  name="birthday"
                  type="text"
                  placeholder="Type date of birth XX.XX.XXXX"
                />
              </LabelField>
              <ErrorMessageStyled name='birthday' component="span"/>
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Breed</LabelFieldTitle>
                <FieldStyled
                  name="breed"
                  type="text"
                  placeholder="Type breed"
                />
              </LabelField>
              <ErrorMessageStyled name='breed' component="span"/>
            </div>
          </Container>
          </>
  );
};
