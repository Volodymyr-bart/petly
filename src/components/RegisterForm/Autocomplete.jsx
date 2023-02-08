import usePlacesAutocomplete from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { CityStyled, FieldStyled, ItemStyled, ListStyled, RegionStyled } from "./RegisterForm.styled";
  
export const PlacesAutocomplete = ({saveAddress}) => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        /* Define search scope here */
      },
      debounce: 300,
    });
    const ref = useOnclickOutside(() => {
      // When user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
      clearSuggestions();
    });
  
    const handleInput = (e) => {
      // Update the keyword of the input element
      setValue(e.target.value);
      
    };
  
    const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
        saveAddress(description)          
    };
  
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;
  
        return (
          <ItemStyled key={place_id} onClick={handleSelect(suggestion)}>
            <CityStyled>{main_text},<RegionStyled>{secondary_text}</RegionStyled></CityStyled>
          </ItemStyled>
        );
    });
  
    return (
      <div ref={ref} style={{position: 'relative'}}>
        <FieldStyled
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="City"
          name="address"
          type
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ListStyled>{renderSuggestions()}</ListStyled>}
      </div>
    );
  };