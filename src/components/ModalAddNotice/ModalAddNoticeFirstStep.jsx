import { Categories } from 'utils/noticesCatList';

import {
  BoxForInput,
  Button,
  CancelBack,
  Container,
  ContainerButton,
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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const categories = [
  { name: 'lost/found', value: Categories.LOST_FOUND, id: '1' },
  { name: 'In good hands', value: Categories.IN_GOOD_HANDS, id: '2' },
  { name: 'sell', value: Categories.SELL, id: '3' },
];

export const ModalAddNoticeFistStep = ({
  values,
  errors,
  onClose,
  setisLastStep,
  setFieldValue
}) => {
  const isDisabled =
          values.category === '' ||
          values.title === '' ||
          errors.category ||
          errors.title;
          
  return (<>
          <TitleModal>Add pet</TitleModal>
          <Container>
            <Description>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </Description>
            <BoxForInput>
              <LabelFieldTitle>Choose category<span>*</span>:</LabelFieldTitle>
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
                <ErrorMessageStyled name='category' component="span"/>
              </RadioBtnBox>
            </BoxForInput>
            <BoxForInput>
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
            </BoxForInput>
            <BoxForInput>
              <LabelField>
                <LabelFieldTitle>Name pet</LabelFieldTitle>
                <FieldStyled
                  name="name"
                  type="text"
                  placeholder="Type name pet"
                />
              </LabelField>
              <ErrorMessageStyled name='name' component="span"/>
            </BoxForInput>
            <BoxForInput>
              <LabelField>
                <LabelFieldTitle>Date of birth</LabelFieldTitle>
                <DatePicker
                  name="birthday"
                  className='calendar'
                  selected={values.birthday}
                  onChange={date => setFieldValue('birthday', date)}
                  dateFormat="dd.MM.yyyy"
                  maxDate={new Date()}
                  showYearDropdown={true}
                  onClose={onClose}
                  scrollableYearDropdown
                  placeholderText="Type date of birth XX.XX.XXXX"
                />    
              </LabelField>
              <ErrorMessageStyled name='birthday' component="span"/>
            </BoxForInput>
            <BoxForInput>
              <LabelField>
                <LabelFieldTitle>Breed</LabelFieldTitle>
                <FieldStyled
                  name="breed"
                  type="text"
                  placeholder="Type breed"
                />
              </LabelField>
              <ErrorMessageStyled name='breed' component="span"/>
            </BoxForInput>
          </Container>
          <ContainerButton>
            <CancelBack type="button" onClick={onClose}>
              Cancel
            </CancelBack>
            <Button type="button" disabled={isDisabled} className={isDisabled ? 'disabled' : ''} onClick={() => setisLastStep(true)}>
              Next
            </Button>
          </ContainerButton>
        </>
  );
};
